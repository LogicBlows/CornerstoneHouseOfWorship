import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import SiteLayout from "@/components/site/SiteLayout";
import { albums } from "@/lib/gallery";
import { pages } from "@/config/site";

type Viewing = { album: number; photo: number } | null;

const Moments = () => {
  const [open, setOpen] = useState<Viewing>(null);

  const album = open ? albums[open.album] : null;
  const current = open && album ? album.photos[open.photo] : null;

  const step = (dir: 1 | -1) =>
    setOpen((v) => {
      if (!v) return v;
      const count = albums[v.album].photos.length;
      return { ...v, photo: (v.photo + dir + count) % count };
    });

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <SiteLayout title="Moments" description="Photos from Sunday services, youth gatherings, events and outreach at Cornerstone House of Worship.">
      <section className="pb-12 pt-12 sm:pb-16 sm:pt-20">
        <div className="wrap">
          <p className="eyebrow mb-5 text-violet-light">Moments</p>
          <h1 className="font-serif text-[60px] font-medium leading-[0.92] sm:text-[104px]">
            {pages.moments.title}
            <br />
            <em className="text-violet-pale">{pages.moments.accent}</em>
          </h1>
        </div>
      </section>

      <div className="wrap space-y-20 pb-24 sm:space-y-24 sm:pb-32">
        {albums.length === 0 && <p className="py-20 text-center text-mist">Photos coming soon.</p>}

        {albums.map((a, albumIndex) => (
          <section key={a.id} aria-labelledby={`album-${a.id}`}>
            <div className="mb-6 flex flex-wrap items-baseline justify-between gap-3 border-b border-ivory/15 pb-4 sm:mb-8">
              <h2 id={`album-${a.id}`} className="font-serif text-[36px] font-medium leading-tight sm:text-[48px]">
                {a.label}
              </h2>
              <p className="text-sm text-mist">
                {a.photos.length} {a.photos.length === 1 ? "photo" : "photos"}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
              {a.photos.map((p, photoIndex) => (
                <button
                  key={p.src}
                  type="button"
                  onClick={() => setOpen({ album: albumIndex, photo: photoIndex })}
                  aria-label={`Open ${p.caption}`}
                  className="group aspect-square cursor-zoom-in overflow-hidden rounded-2xl bg-plum"
                >
                  <img
                    src={p.src}
                    alt={p.caption}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </button>
              ))}
            </div>
          </section>
        ))}

        {albums.length > 0 && <p className="text-center text-mist">Tap any photo to view it full-screen.</p>}
      </div>

      {current && album && open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${album.label} photo viewer`}
          className="fixed inset-0 z-50 flex flex-col bg-abyss/[0.97] px-4 py-5 sm:px-8"
          onClick={(e) => e.target === e.currentTarget && setOpen(null)}
        >
          <div className="mx-auto flex w-full max-w-[1100px] items-center justify-between gap-4">
            <p className="text-haze">
              {album.label}
              <span className="ml-3 text-sm text-mist">
                {open.photo + 1} / {album.photos.length}
              </span>
            </p>
            <button
              type="button"
              aria-label="Close"
              onClick={() => setOpen(null)}
              className="flex h-[52px] w-[52px] items-center justify-center rounded-full border-[1.5px] border-ivory/40 text-white"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <div className="mx-auto flex min-h-0 w-full max-w-[1100px] flex-1 items-center gap-3 py-5 sm:gap-4">
            <button
              type="button"
              aria-label="Previous photo"
              onClick={() => step(-1)}
              className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border-[1.5px] border-ivory/40 bg-night/60 text-white"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <img src={current.src} alt={current.caption} className="h-full min-w-0 flex-1 rounded-xl object-contain" />
            <button
              type="button"
              aria-label="Next photo"
              onClick={() => step(1)}
              className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border-[1.5px] border-ivory/40 bg-night/60 text-white"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </SiteLayout>
  );
};

export default Moments;
