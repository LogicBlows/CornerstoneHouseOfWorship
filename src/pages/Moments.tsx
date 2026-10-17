import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";
import SiteLayout from "@/components/site/SiteLayout";
import { albums, photos } from "@/lib/gallery";
import { pages } from "@/config/site";

const Moments = () => {
  const [album, setAlbum] = useState("all");
  const [open, setOpen] = useState<number | null>(null);

  const shown = photos.filter((p) => album === "all" || p.album === album);
  const current = open === null ? null : shown[open];

  const step = (dir: 1 | -1) => setOpen((i) => (i === null ? i : (i + dir + shown.length) % shown.length));

  useEffect(() => {
    if (open === null) return;
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, shown.length]);

  return (
    <SiteLayout title="Moments" description="Photos from Sunday services, youth gatherings, events and outreach at Cornerstone House of Worship.">
      <section className="pb-12 pt-12 sm:pb-14 sm:pt-20">
        <div className="wrap">
          <p className="eyebrow mb-5 text-violet-light">Moments</p>
          <div className="flex flex-wrap items-end justify-between gap-8">
            <h1 className="font-serif text-[60px] font-medium leading-[0.92] sm:text-[104px]">
              {pages.moments.title}
              <br />
              <em className="text-violet-pale">{pages.moments.accent}</em>
            </h1>
            {albums.length > 1 && (
              <div role="group" aria-label="Filter by album" className="flex flex-wrap gap-2.5">
                {[{ id: "all", label: "All" }, ...albums].map((a) => (
                  <button
                    key={a.id}
                    type="button"
                    aria-pressed={album === a.id}
                    onClick={() => {
                      setAlbum(a.id);
                      setOpen(null);
                    }}
                    className={cn(
                      "min-h-11 rounded-full border-[1.5px] px-5 text-[15px] font-semibold transition-colors",
                      album === a.id ? "border-ivory bg-ivory text-night" : "border-ivory/35 text-[#efe6f6] hover:border-ivory",
                    )}
                  >
                    {a.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="wrap">
          {shown.length === 0 ? (
            <p className="py-20 text-center text-mist">No photos in this album yet.</p>
          ) : (
            <div className="gap-4 [column-width:280px]">
              {shown.map((p, i) => (
                <button
                  key={p.src}
                  type="button"
                  onClick={() => setOpen(i)}
                  aria-label={`Open photo: ${p.caption}`}
                  className="group mb-4 block w-full cursor-zoom-in overflow-hidden rounded-[18px] [break-inside:avoid]"
                >
                  <img
                    src={p.src}
                    alt={p.caption}
                    loading="lazy"
                    className="block h-auto w-full transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </button>
              ))}
            </div>
          )}
          <p className="mt-8 text-center text-mist">Tap any photo to view it full-screen.</p>
        </div>
      </section>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          className="fixed inset-0 z-50 flex flex-col bg-abyss/[0.97] px-4 py-5 sm:px-8"
          onClick={(e) => e.target === e.currentTarget && setOpen(null)}
        >
          <div className="mx-auto flex w-full max-w-[1100px] items-center justify-between gap-4">
            <p className="text-haze">
              {current.caption}
              <span className="ml-3 text-sm text-mist">
                {(open ?? 0) + 1} / {shown.length}
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
