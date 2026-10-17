import { useState } from "react";
import { Link } from "react-router-dom";
import { Minus, Plus } from "lucide-react";
import SiteLayout from "@/components/site/SiteLayout";
import { beliefs, leaders, mainService, ministries, pages, site } from "@/config/site";

const page = pages.ourHouse;

const OurHouse = () => {
  const [openMinistry, setOpenMinistry] = useState<string | null>(ministries[0]?.name ?? null);

  return (
    <SiteLayout
      title="Our House"
      description="The story, beliefs, leaders and ministries of Cornerstone House of Worship."
      className="bg-ivory"
    >
      <section className="py-20 text-ink sm:py-28">
        <div className="wrap grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="eyebrow mb-6 text-violet">Our House</p>
            <h1 className="mb-8 font-serif text-[56px] font-medium leading-[0.94] sm:text-[92px]">
              {page.title} <em className="text-violet">{page.accent}</em>
            </h1>
            <p className="mb-5 text-base leading-[1.75] text-[#4b4053] sm:text-lg">{page.story}</p>
            <p className="text-base leading-[1.75] text-[#4b4053] sm:text-lg">{page.vision}</p>
          </div>
          <div className="arch aspect-[3/4] w-full max-w-[460px] justify-self-center lg:justify-self-end">
            <img src={page.photo} alt="" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-night py-24 text-ivory sm:py-32">
        <div className="wrap">
          <p className="eyebrow mb-5 text-violet-light">What we believe</p>
          <h2 className="mb-14 font-serif text-[44px] font-medium leading-none sm:text-[64px]">{page.beliefsTitle}</h2>
          <div className="grid border-t border-ivory/20 sm:grid-cols-2 lg:grid-cols-4">
            {beliefs.map((b, i) => (
              <div key={b.title} className="border-b border-ivory/10 py-8 sm:pr-7 lg:border-b-0">
                <p className="mb-4 font-serif text-[56px] italic leading-none text-violet-light">{String(i + 1).padStart(2, "0")}</p>
                <p className="mb-2 text-[19px] font-bold">{b.title}</p>
                <p className="leading-relaxed text-mist">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 text-ink sm:py-32">
        <div className="wrap">
          <p className="eyebrow mb-5 text-violet">Leadership</p>
          <h2 className="mb-14 font-serif text-[44px] font-medium leading-none sm:text-[64px]">{page.leadersTitle}</h2>
          <div className="grid grid-cols-2 gap-6 sm:gap-7 md:grid-cols-3 lg:grid-cols-5">
            {leaders.map((l) => (
              <div key={l.name}>
                <div className="arch flex aspect-[3/4] items-center justify-center border border-dashed border-[#a593b0] bg-[#e8dcef]">
                  {l.photo ? (
                    <img src={l.photo} alt={l.name} className="h-full w-full object-cover" />
                  ) : (
                    <span className="font-serif text-5xl text-slate" aria-hidden="true">
                      {l.name.replace(/^(Ps\.|Apostle)\s+/, "").charAt(0)}
                    </span>
                  )}
                </div>
                <p className="mb-1 mt-[18px] font-serif text-[26px] font-semibold leading-tight">{l.name}</p>
                <p className="text-slate">{l.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 text-ink sm:pb-32">
        <div className="wrap flex flex-wrap gap-12 lg:gap-16">
          <div className="flex-[1_1_300px]">
            <p className="eyebrow mb-5 text-violet">Ministries</p>
            <h2 className="mb-5 font-serif text-[44px] font-medium leading-none sm:text-[64px]">{page.ministriesTitle}</h2>
            <p className="text-[17px] leading-[1.7] text-slate">{page.ministriesIntro}</p>
          </div>
          <div className="min-w-0 flex-[999_1_560px] border-t-[1.5px] border-ink">
            {ministries.map((m) => {
              const isOpen = openMinistry === m.name;
              const panelId = `ministry-${m.name.replace(/\W+/g, "-").toLowerCase()}`;
              return (
                <div key={m.name} className="border-b border-[#d8cce0]">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenMinistry(isOpen ? null : m.name)}
                    className="flex min-h-[84px] w-full items-center justify-between gap-5 text-left"
                  >
                    <span className="font-serif text-[26px] font-semibold sm:text-[32px]">{m.name}</span>
                    <span className="flex items-center gap-4 text-[15px] text-slate">
                      <span className="hidden sm:inline">{m.when}</span>
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-[1.5px] border-ink text-ink">
                        {isOpen ? <Minus className="h-4 w-4" aria-hidden="true" /> : <Plus className="h-4 w-4" aria-hidden="true" />}
                      </span>
                    </span>
                  </button>
                  {isOpen && (
                    <div id={panelId} className="max-w-[560px] pb-7">
                      <p className="mb-1 text-[15px] font-semibold text-violet sm:hidden">{m.when}</p>
                      <p className="text-[17px] leading-[1.7] text-[#4b4053]">{m.blurb}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="wrap">
          <div className="relative flex min-h-[380px] items-center overflow-hidden rounded-[24px] sm:rounded-[32px]">
            <img src={page.ctaPhoto} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-night/75" />
            <div className="relative max-w-[640px] p-8 text-ivory sm:p-16">
              <h2 className="mb-5 font-serif text-[44px] font-medium leading-none sm:text-6xl">
                {page.ctaTitle} <em className="text-violet-pale">{page.ctaAccent}</em>
              </h2>
              <p className="mb-8 text-lg text-haze">
                Sundays at {mainService.time} · {site.address.area}
              </p>
              <Link to="/#visit" className="pill pill-light">
                Plan your first Sunday
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default OurHouse;
