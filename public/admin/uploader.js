// Small additions to the Decap CMS photo window:
// 1. The Upload button accepts several photos at once. Decap itself only takes
//    one file per upload, so the files are handed to it one after another.
// 2. Each photo is shrunk before uploading (longest side 1600px, JPEG) so phone
//    photos don't slow the website down.
// 3. "Delete selected" is hidden: it deletes the files for the whole site,
//    including photos other albums and pages still use.

(function () {
  var MAX_SIDE = 1600;
  var QUALITY = 0.82;
  var SKIP_BELOW_BYTES = 400 * 1024;

  function sleep(ms) {
    return new Promise(function (resolve) {
      setTimeout(resolve, ms);
    });
  }

  function shrink(file) {
    if (!/^image\/(jpeg|png|webp|heic|heif)$/i.test(file.type)) return Promise.resolve(file);
    return createImageBitmap(file, { imageOrientation: "from-image" })
      .then(function (bitmap) {
        var scale = Math.min(1, MAX_SIDE / Math.max(bitmap.width, bitmap.height));
        if (scale === 1 && file.size < SKIP_BELOW_BYTES) return file;
        var canvas = document.createElement("canvas");
        canvas.width = Math.round(bitmap.width * scale);
        canvas.height = Math.round(bitmap.height * scale);
        canvas.getContext("2d").drawImage(bitmap, 0, 0, canvas.width, canvas.height);
        return new Promise(function (resolve) {
          canvas.toBlob(
            function (blob) {
              if (!blob || blob.size >= file.size) return resolve(file);
              var name = file.name.replace(/\.[^.]+$/, "") + ".jpg";
              resolve(new File([blob], name, { type: "image/jpeg", lastModified: Date.now() }));
            },
            "image/jpeg",
            QUALITY,
          );
        });
      })
      .catch(function () {
        return file;
      });
  }

  function uploadButton() {
    return Array.prototype.find.call(document.querySelectorAll("button, label"), function (el) {
      return /^Upload(ing)?/i.test((el.textContent || "").trim());
    });
  }

  async function waitForUploadToFinish() {
    await sleep(400);
    for (var i = 0; i < 600; i++) {
      var btn = uploadButton();
      if (!btn || !/uploading/i.test(btn.textContent || "")) return;
      await sleep(250);
    }
  }

  // Hand the chosen files to Decap one at a time.
  document.addEventListener(
    "change",
    async function (event) {
      var input = event.target;
      if (!(input instanceof HTMLInputElement) || input.type !== "file") return;
      if (input.dataset.relaying === "1") return;
      var files = Array.prototype.slice.call(input.files || []);
      if (files.length === 0) return;

      event.stopImmediatePropagation();
      for (var i = 0; i < files.length; i++) {
        var file = await shrink(files[i]);
        var transfer = new DataTransfer();
        transfer.items.add(file);
        input.files = transfer.files;
        input.dataset.relaying = "1";
        input.dispatchEvent(new Event("change", { bubbles: true }));
        delete input.dataset.relaying;
        await waitForUploadToFinish();
      }
    },
    true,
  );

  // Allow choosing several files, and hide the site-wide delete button.
  new MutationObserver(function () {
    document.querySelectorAll('input[type="file"]').forEach(function (input) {
      if (!input.multiple) input.multiple = true;
    });
    document.querySelectorAll("button").forEach(function (button) {
      if ((button.textContent || "").trim() === "Delete selected" && button.style.display !== "none") {
        button.style.display = "none";
      }
    });
  }).observe(document.documentElement, { childList: true, subtree: true });
})();
