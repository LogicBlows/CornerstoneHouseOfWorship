import SiteLayout from "@/components/site/SiteLayout";
import PrayerForm from "@/components/site/PrayerForm";
import { gatherings, pages, testimonies, whatsappLink } from "@/config/site";

const pray = pages.pray;
const prayerMeetings = gatherings.filter((g) => g.prayer);

const Pray = () => (
  <SiteLayout
    title="Pray"
    description="Send a prayer request to the pastors of Cornerstone House of Worship, or join one of our prayer meetings."
    className="bg-ivory"
  >
    <section className="py-20 text-center text-ink sm:py-28">
      <div className="wrap">
        <p className="eyebrow mb-7 text-violet">Pray</p>
        <h1 className="mx-auto mb-7 max-w-[980px] font-serif text-[52px] font-medium leading-[0.95] sm:text-[96px]">
          {pray.title} <em className="text-violet">{pray.accent}</em>
        </h1>
        <p className="mx-auto max-w-[600px] text-base leading-[1.7] text-slate sm:text-[19px]">
          {pray.intro}
        </p>
      </div>
    </section>

    <section className="pb-24 text-ink sm:pb-32">
      <div className="wrap flex flex-wrap items-start gap-10">
        <div className="min-w-0 flex-[999_1_560px] rounded-[28px] border border-[#e5dbe9] bg-paper p-6 sm:p-12">
          <PrayerForm variant="full" />
        </div>

        <aside className="flex min-w-0 flex-[1_1_320px] flex-col gap-5">
          <div className="rounded-[28px] bg-night p-8 text-ivory sm:p-9">
            <p className="eyebrow mb-3.5 text-violet-light">Prefer to talk?</p>
            <p className="mb-3 font-serif text-[32px] font-medium leading-[1.1]">{pray.whatsappTitle}</p>
            <p className="mb-6 leading-relaxed text-mist">{pray.whatsappNote}</p>
            <a href={whatsappLink("Hi, I'd like prayer for…")} target="_blank" rel="noreferrer" className="pill pill-light">
              Open WhatsApp
            </a>
          </div>
          <div className="rounded-[28px] border border-line p-8 sm:p-9">
            <p className="eyebrow mb-5 text-violet">Pray with us</p>
            <ul>
              {prayerMeetings.map((g) => (
                <li key={g.name} className="flex justify-between gap-4 border-b border-[#e5dbe9] py-3.5 last:border-0">
                  <span className="font-bold">
                    {g.name}
                    {g.where ? ` · ${g.where}` : ""}
                  </span>
                  <span className="text-slate">
                    {g.day} {g.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>

    <section className="bg-night py-24 text-ivory sm:py-32">
      <div className="wrap">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="eyebrow mb-5 text-violet-light">Answered prayers</p>
            <h2 className="font-serif text-[48px] font-medium leading-none sm:text-[64px]">{pray.testimoniesTitle}</h2>
          </div>
          <a href={whatsappLink("Hi, I'd like to share a testimony…")} target="_blank" rel="noreferrer" className="font-bold text-violet-light hover:text-violet-pale">
            Share your testimony →
          </a>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonies.map((t, i) => (
            <figure key={i} className="rounded-3xl border border-ivory/20 p-8 sm:p-9">
              <blockquote className="mb-6 font-serif text-[26px] italic leading-[1.3]">"{t.quote.replace(/^"|"$/g, "")}"</blockquote>
              <figcaption className="text-mist">
                {t.name} · {t.when}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  </SiteLayout>
);

export default Pray;
