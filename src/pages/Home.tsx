import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import SiteLayout from "@/components/site/SiteLayout";
import PrayerForm from "@/components/site/PrayerForm";
import VideoPoster from "@/components/site/VideoPoster";
import Portrait from "@/components/site/Portrait";
import { churchChannel, gatherings, latestMessage, leaders, mainService, messages, pages, site, speakerChannel, speakers, sundayGatherings, weekDays, type Speaker } from "@/config/site";
import { photos } from "@/lib/gallery";
import heroFallback from "@/assets/hero-sermon.jpg";

const home = pages.home;

// Main photo tint, chosen in the editor (Home > Home page): on/off, any colour, and a strength.
const BRAND_PURPLE = "#5B1A8A";
const namedTints: Record<string, string> = { purple: BRAND_PURPLE, blue: "#1F3A8A", gold: "#A8761E", rose: "#9B2C5A", teal: "#11665F" };
const tintStrengths: Record<string, number> = { light: 0.4, medium: 0.6, strong: 0.8 };
const tintSettings = home as { heroTint?: boolean; heroTintColor?: string; heroTintStrength?: string };
const tintColor = (tintSettings.heroTintColor ?? "").trim();
const heroTint =
  tintSettings.heroTint === false || tintColor === "none"
    ? null
    : {
        color: namedTints[tintColor] ?? (tintColor || BRAND_PURPLE),
        opacity: tintStrengths[tintSettings.heroTintStrength ?? "medium"] ?? tintStrengths.medium,
      };
const otherSunday = sundayGatherings.find((g) => g !== mainService);

const Home = () => {
  const [speaker, setSpeaker] = useState<Speaker>(latestMessage?.speaker ?? "pastor");
  const latest = messages.find((m) => m.speaker === speaker) ?? messages[0];

  return (
    <SiteLayout headerVariant="overlay">
      {/* Hero */}
      <section className="relative flex min-h-[760px] flex-col overflow-hidden lg:min-h-[820px]">
        <img
          src={home.heroPhoto || heroFallback}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[35%_center]"
        />
        {/* Colour wash over whatever photo is chosen in the editor (purple by default). */}
        {heroTint && (
          <div className="absolute inset-0 mix-blend-color" style={{ backgroundColor: heroTint.color, opacity: heroTint.opacity }} />
        )}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,10,28,.6)_0%,rgba(20,10,28,.15)_35%,rgba(20,10,28,.88)_78%,#140a1c_100%)]" />
        <div className="wrap relative mt-auto pb-10 pt-40 sm:pb-12">
          <p className="eyebrow mb-4 text-violet-pale sm:mb-5">{home.heroEyebrow}</p>
          <h1 className="mb-5 max-w-[900px] font-serif text-[64px] font-medium leading-[0.92] sm:text-[88px] lg:text-[120px]">
            {home.heroTitle}
            <br />
            <em className="text-violet-pale">{home.heroAccent}</em>
          </h1>
          <p className="mb-8 max-w-[560px] text-base leading-relaxed text-haze sm:mb-10 sm:text-xl">
            {home.heroIntro}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link to="/#visit" className="pill pill-light">
              Plan your first Sunday
            </Link>
            <Link to="/watch" className="pill pill-ghost">
              <Play className="h-4 w-4" aria-hidden="true" />
              Watch the latest message
            </Link>
          </div>
        </div>
      </section>

      {/* Sunday info bar */}
      <section id="visit" className="scroll-mt-6 bg-night pb-2">
        <div className="wrap">
          <div className="grid grid-cols-2 border-y border-ivory/20 lg:grid-cols-4">
            <div className="border-r border-ivory/20 py-6 pr-4 lg:py-7">
              <p className="eyebrow mb-2.5 text-violet-light">This Sunday</p>
              <p className="font-serif text-[28px] font-semibold sm:text-3xl">{mainService.time}</p>
              <p className="mt-1.5 hidden text-mist sm:block">{mainService.name}</p>
            </div>
            <div className="py-6 pl-4 lg:border-r lg:border-ivory/20 lg:px-6 lg:py-7">
              <p className="eyebrow mb-2.5 text-violet-light">{otherSunday?.name}</p>
              <p className="font-serif text-[28px] font-semibold sm:text-3xl">{otherSunday?.time}</p>
              <p className="mt-1.5 hidden text-mist sm:block">{otherSunday?.where}</p>
            </div>
            <div className="col-span-2 border-t border-ivory/20 py-6 lg:col-span-1 lg:border-r lg:border-t-0 lg:px-6 lg:py-7">
              <p className="eyebrow mb-2.5 text-violet-light">Find us</p>
              <p className="font-serif text-[28px] font-semibold sm:text-3xl">{site.address.area}</p>
              <p className="mt-1.5 text-mist">{site.address.street}</p>
            </div>
            <div className="col-span-2 flex items-center pb-6 lg:col-span-1 lg:py-7 lg:pl-6">
              <a className="pill pill-light w-full" href={site.address.mapsUrl} target="_blank" rel="noreferrer">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Get directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our name & foundation */}
      <section className="bg-ivory py-20 text-ink sm:py-28 lg:py-36">
        <div className="wrap grid items-center gap-14 lg:grid-cols-2 lg:gap-[72px]">
          <div>
            <p className="eyebrow mb-6 text-violet sm:mb-7">{home.verseRef}</p>
            <p className="mb-7 font-serif text-[36px] font-medium leading-[1.08] sm:text-[54px]">
              "{home.verseText} <em className="text-violet">{home.verseAccent}</em>."
            </p>
            <p className="mb-8 max-w-[520px] text-base leading-[1.7] text-slate sm:text-lg">
              {home.foundationText}
            </p>
            <Link to="/our-house" className="font-bold text-violet hover:text-violet-dark">
              Our story &amp; beliefs →
            </Link>
          </div>
          <div className="flex items-end gap-3 sm:gap-5">
            <div className="arch aspect-[3/4] flex-1">
              <img src={home.foundationPhotoLeft} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="arch mb-10 aspect-[3/4] flex-1 sm:mb-16">
              <img src={home.foundationPhotoRight} alt="" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* The week */}
      <section className="bg-ivory pb-20 text-ink sm:pb-28 lg:pb-36">
        <div className="wrap mb-6 flex flex-wrap items-end justify-between gap-5 sm:mb-10">
          <h2 className="font-serif text-[40px] font-medium leading-none sm:text-6xl">
            {home.weekTitle} <em className="text-violet">{home.weekAccent}</em>
          </h2>
          <p className="hidden text-slate sm:block">{home.weekNote}</p>
        </div>

        {/* Phone: swipeable cards */}
        <div className="flex gap-3 overflow-x-auto px-5 pb-2 sm:hidden">
          {gatherings.map((g) => (
            <div
              key={`${g.day}-${g.name}`}
              className={cn("w-[200px] shrink-0 rounded-[18px] p-5", g.featured ? "bg-ink text-ivory" : "bg-violet-wash")}
            >
              <p className={cn("eyebrow mb-3", g.featured ? "text-violet-light" : "text-violet")}>{g.day}</p>
              <p className="mb-1 font-bold">{g.name}</p>
              <p className={cn("text-sm", g.featured ? "text-[#d8cce0]" : "text-slate")}>
                {g.time}
                {g.where ? ` · ${g.where}` : ""}
              </p>
            </div>
          ))}
        </div>

        {/* Tablet and up: Sunday to Saturday */}
        <div className="wrap hidden sm:block">
          <div className="overflow-x-auto">
            <div className="grid min-w-[900px] grid-cols-7 border-t-[1.5px] border-ink">
              {weekDays.map((day, i) => {
                const items = gatherings.filter((g) => g.day === day);
                return (
                  <div
                    key={day}
                    className={cn(
                      "flex min-h-[220px] flex-col gap-3 py-6",
                      i === 0 ? "pr-4" : i === 6 ? "pl-4" : "px-4",
                      i < 6 && "border-r border-line",
                    )}
                  >
                    <p className={cn("eyebrow", items.length ? "text-violet" : "text-[#8b7f93]")}>{day}</p>
                    {items.map((g) => (
                      <div key={g.name} className={cn("rounded-[14px] p-4", g.featured ? "bg-ink text-ivory" : "bg-violet-wash")}>
                        <p className="mb-1 font-bold">{g.name}</p>
                        <p className={cn("text-sm", g.featured ? "text-[#d8cce0]" : "text-slate")}>
                          {g.time}
                          {g.where ? ` · ${g.where}` : ""}
                        </p>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* From the pulpit */}
      {latest && (
        <section className="bg-night py-20 sm:py-28 lg:py-36">
          <div className="wrap grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <VideoPoster key={latest.title + latest.speaker} message={latest} className="aspect-[16/10] rounded-[18px] sm:rounded-3xl" />
            <div>
              <p className="eyebrow mb-5 text-violet-light">From the pulpit</p>
              <div role="tablist" aria-label="Choose a speaker" className="mb-8 flex gap-7 border-b border-ivory/20">
                {(Object.keys(speakers) as Speaker[]).map((key) => (
                  <button
                    key={key}
                    type="button"
                    role="tab"
                    aria-selected={speaker === key}
                    onClick={() => setSpeaker(key)}
                    className={cn(
                      "-mb-px min-h-11 border-b-2 text-base font-semibold transition-colors",
                      speaker === key ? "border-violet-light text-white" : "border-transparent text-mist hover:text-white",
                    )}
                  >
                    {speakers[key].series}
                  </button>
                ))}
              </div>
              <h2 className="mb-4 font-serif text-[34px] font-medium leading-[1.04] sm:text-[52px]">{latest.title}</h2>
              <p className="mb-2 text-lg text-haze">
                {speakers[latest.speaker].name} · {speakers[latest.speaker].series}
              </p>
              <p className="mb-9 text-[15px] text-mist">
                {[latest.date, latest.scripture].filter(Boolean).join(" · ")}
              </p>
              <div className="flex flex-wrap gap-3.5">
                <Link to="/watch" className="pill pill-light">
                  All messages
                </Link>
                {speakerChannel(latest.speaker) === churchChannel ? (
                  <a href={pages.watch.liveUrl || churchChannel} target="_blank" rel="noreferrer" className="pill pill-ghost">
                    Join us live on YouTube
                  </a>
                ) : (
                  <a href={speakerChannel(latest.speaker)} target="_blank" rel="noreferrer" className="pill pill-ghost">
                    {speakers[latest.speaker].series} on YouTube
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Prayer */}
      <section className="bg-ivory py-20 text-ink sm:py-28 lg:py-36">
        <div className="wrap grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="eyebrow mb-6 text-violet">Prayer</p>
            <h2 className="mb-6 font-serif text-[44px] font-medium leading-[0.98] sm:text-[72px]">
              {home.prayerTitle} <em className="text-violet">{home.prayerAccent}</em>
            </h2>
            <p className="mb-8 max-w-[460px] text-base leading-[1.7] text-slate sm:text-lg">
              {home.prayerIntro}
            </p>
            <Link to="/pray" className="font-bold text-violet hover:text-violet-dark">
              Prayer meetings &amp; answered prayers →
            </Link>
          </div>
          <div className="rounded-[28px] border border-[#e5dbe9] bg-paper p-6 sm:p-10">
            <PrayerForm variant="compact" />
          </div>
        </div>
      </section>

      {/* Moments */}
      <section className="bg-night pb-20 pt-20 sm:pt-28 lg:pt-36">
        <div className="wrap">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-5 sm:mb-12">
            <div>
              <p className="eyebrow mb-5 text-violet-light">Moments</p>
              <h2 className="font-serif text-[40px] font-medium leading-none sm:text-[64px]">{home.momentsTitle}</h2>
            </div>
            <Link to="/moments" className="pill pill-ghost">
              Open the gallery
            </Link>
          </div>
          <div className="grid auto-rows-[150px] grid-cols-2 gap-2.5 sm:auto-rows-[220px] sm:grid-cols-4 sm:gap-4">
            {photos.slice(0, 4).map((p, i) => (
              <Link
                key={p.src}
                to="/moments"
                className={cn(
                  "overflow-hidden rounded-2xl sm:rounded-[20px]",
                  i === 0 && "col-span-2 row-span-2",
                  i === 3 && "col-span-2",
                )}
              >
                <img src={p.src} alt={p.caption} className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Shepherds */}
      <section className="bg-night pb-20 pt-4 sm:pb-28 lg:pb-36">
        <div className="wrap">
          <p className="eyebrow mb-5 text-violet-light">Shepherds</p>
          <h2 className="mb-10 font-serif text-[40px] font-medium leading-none sm:mb-12 sm:text-[64px]">
            {home.shepherdsTitle}
          </h2>
          <div className="grid grid-cols-2 gap-5 sm:gap-7 lg:grid-cols-4">
            {leaders.filter((l) => l.showOnHome).slice(0, 3).map((l) => (
              <div key={l.name}>
                <Portrait name={l.name} photo={l.photo} tone="dark" />
                <p className="mb-1 mt-5 font-serif text-2xl font-semibold sm:text-[28px]">{l.name}</p>
                <p className="text-mist">{l.role}</p>
              </div>
            ))}
            <div className="flex flex-col justify-center gap-5 rounded-[20px] border border-ivory/20 p-6">
              <p className="font-serif text-2xl font-medium leading-tight sm:text-3xl">
                {home.shepherdsNote}
              </p>
              <Link to="/our-house" className="font-bold text-violet-light hover:text-violet-pale">
                Meet everyone →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Home;
