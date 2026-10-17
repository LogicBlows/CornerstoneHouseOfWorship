import { useState } from "react";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";
import SiteLayout from "@/components/site/SiteLayout";
import VideoPoster from "@/components/site/VideoPoster";
import { messages, pages, site, speakers, type Speaker } from "@/config/site";
import { photos } from "@/lib/gallery";

type Filter = "all" | Speaker;

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "pastor", label: speakers.pastor.series },
  { id: "apostle", label: speakers.apostle.series },
];

const thumbnail = (m: (typeof messages)[number], i: number) =>
  m.youtubeId ? `https://i.ytimg.com/vi/${m.youtubeId}/hqdefault.jpg` : photos[i % photos.length]?.src;

const Watch = () => {
  const [filter, setFilter] = useState<Filter>("all");
  const [featured, ...past] = messages;
  const shown = past.filter((m) => filter === "all" || m.speaker === filter);

  return (
    <SiteLayout title="Watch" description="Sermons from Pastor's Word and Apostle's Word at Cornerstone House of Worship.">
      <section className="pb-14 pt-12 sm:pb-[72px] sm:pt-20">
        <div className="wrap flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className="eyebrow mb-5 text-violet-light">Watch</p>
            <h1 className="font-serif text-[60px] font-medium leading-[0.92] sm:text-[104px]">
              {pages.watch.title}
              <br />
              <em className="text-violet-pale">{pages.watch.accent}</em>
            </h1>
          </div>
          <div className="flex flex-wrap items-center gap-4 rounded-[18px] border border-ivory/20 px-5 py-4">
            <span className="h-3 w-3 rounded-full bg-[#ff6b6b]" aria-hidden="true" />
            <div>
              <p className="font-bold">{pages.watch.liveTitle}</p>
              <p className="mt-0.5 text-sm text-mist">{pages.watch.liveNote}</p>
            </div>
            <a href={site.social.youtube} target="_blank" rel="noreferrer" className="pill pill-light min-h-11 px-[18px]">
              Open YouTube
            </a>
          </div>
        </div>
      </section>

      {featured && (
        <section className="pb-20 sm:pb-24">
          <div className="wrap grid items-center gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-14">
            <VideoPoster message={featured} poster={photos[0]?.src} className="aspect-video rounded-[20px] sm:rounded-[28px]" />
            <div>
              <p className="eyebrow mb-4 text-violet-pale">Latest · {featured.date}</p>
              <h2 className="mb-4 font-serif text-[40px] font-medium leading-none sm:text-[58px]">{featured.title}</h2>
              <p className="text-[17px] leading-relaxed text-haze">
                {speakers[featured.speaker].name}
                {featured.scripture ? ` · ${featured.scripture}` : ""}
                {featured.summary ? `. ${featured.summary}` : ""}
              </p>
            </div>
          </div>
        </section>
      )}

      <section className="pb-24 sm:pb-36">
        <div className="wrap">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-5">
            <h2 className="font-serif text-[40px] font-medium sm:text-[52px]">Past messages</h2>
            <div role="group" aria-label="Filter by speaker" className="flex flex-wrap gap-2.5">
              {filters.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  aria-pressed={filter === f.id}
                  onClick={() => setFilter(f.id)}
                  className={cn(
                    "min-h-11 rounded-full border-[1.5px] px-5 text-[15px] font-semibold transition-colors",
                    filter === f.id ? "border-ivory bg-ivory text-night" : "border-ivory/35 text-[#efe6f6] hover:border-ivory",
                  )}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-x-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((m, i) => (
              <a
                key={`${m.title}-${i}`}
                href={m.youtubeId ? `https://www.youtube.com/watch?v=${m.youtubeId}` : site.social.youtube}
                target="_blank"
                rel="noreferrer"
                className="group block text-ivory"
              >
                <div className="relative mb-[18px] aspect-video overflow-hidden rounded-[18px]">
                  <img src={thumbnail(m, i + 1)} alt="" className="h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-100" />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ivory/90 text-night opacity-0 transition-opacity group-hover:opacity-100">
                      <Play className="h-5 w-5 fill-current" aria-hidden="true" />
                    </span>
                  </span>
                </div>
                <p className="eyebrow mb-2.5 text-violet-light">{speakers[m.speaker].series}</p>
                <p className="mb-1.5 font-serif text-[28px] font-semibold leading-tight group-hover:text-white">{m.title}</p>
                <p className="text-[15px] text-mist">
                  {speakers[m.speaker].name} · {m.date}
                </p>
              </a>
            ))}
          </div>

          <p className="mt-12 text-center">
            <a href={site.social.youtube} target="_blank" rel="noreferrer" className="font-bold text-violet-light hover:text-violet-pale">
              More on our YouTube channel →
            </a>
          </p>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Watch;
