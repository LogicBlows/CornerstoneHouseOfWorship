import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SiteLayout from "@/components/site/SiteLayout";
import Portrait from "@/components/site/Portrait";
import { pages } from "@/config/site";
import { teams } from "@/lib/teams";

const page = pages.ourTeam;

const OurTeam = () => (
  <SiteLayout
    title="Our Team"
    description="Meet the worship, media and ministry teams who serve at Cornerstone House of Worship."
    className="bg-ivory"
  >
    <section className="pb-12 pt-16 text-ink sm:pb-16 sm:pt-24">
      <div className="wrap">
        <Link to="/our-house" className="mb-8 inline-flex min-h-11 items-center gap-2 font-semibold text-violet hover:text-violet-dark">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Our House
        </Link>
        <p className="eyebrow mb-6 text-violet">Our Team</p>
        <h1 className="mb-6 max-w-[900px] font-serif text-[56px] font-medium leading-[0.94] sm:text-[92px]">
          {page.title} <em className="text-violet">{page.accent}</em>
        </h1>
        {page.intro && <p className="max-w-[620px] text-base leading-[1.75] text-[#4b4053] sm:text-lg">{page.intro}</p>}
      </div>
    </section>

    <div className="wrap space-y-20 pb-24 text-ink sm:space-y-24 sm:pb-32">
      {teams.length === 0 && <p className="py-16 text-center text-slate">Our teams will be introduced here soon.</p>}

      {teams.map((team) => (
        <section key={team.id} aria-labelledby={`team-${team.id}`}>
          <div className="mb-8 border-b border-[#d8cce0] pb-5 sm:mb-10">
            <h2 id={`team-${team.id}`} className="font-serif text-[36px] font-medium leading-tight sm:text-[52px]">
              {team.name}
            </h2>
            {team.description && <p className="mt-2 max-w-[640px] text-[17px] leading-[1.7] text-slate">{team.description}</p>}
          </div>
          {team.members.length > 0 ? (
            <ul className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 sm:gap-x-7 lg:grid-cols-5">
              {team.members.map((m, i) => (
                <li key={`${m.name}-${i}`}>
                  <Portrait name={m.name} photo={m.photo} />
                  <p className="mb-1 mt-4 font-serif text-[22px] font-semibold leading-tight sm:text-[24px]">{m.name}</p>
                  {m.role && <p className="text-[15px] text-slate">{m.role}</p>}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-slate">Members coming soon.</p>
          )}
        </section>
      ))}
    </div>
  </SiteLayout>
);

export default OurTeam;
