import { Link } from "react-router-dom";
import { pages, site, sundayGatherings } from "@/config/site";
import Wordmark from "./Wordmark";

const SiteFooter = () => (
  <footer className="border-t border-ivory/10 bg-abyss pb-10 pt-20 text-ivory sm:pt-24">
    <div className="wrap">
      <div className="flex flex-wrap items-end justify-between gap-10 border-b border-ivory/15 pb-16">
        <Link to="/" aria-label={`${site.name}, home`}>
          <Wordmark size="lg" />
        </Link>
        <div className="max-w-sm">
          <p className="mb-4 leading-relaxed text-mist">{pages.footer.whatsappText}</p>
          <a
            className="pill pill-light"
            href={site.contact.whatsappCommunityUrl || "#"}
            target="_blank"
            rel="noreferrer"
          >
            Join on WhatsApp
          </a>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 py-12 md:grid-cols-4">
        <div>
          <p className="eyebrow mb-3.5 text-violet-light">Visit</p>
          <p className="leading-relaxed text-haze">
            {site.address.street}
            <br />
            {site.address.area} {site.address.pin}
          </p>
        </div>
        <div>
          <p className="eyebrow mb-3.5 text-violet-light">Gather</p>
          <ul className="leading-relaxed text-haze">
            {sundayGatherings.map((g) => (
              <li key={g.name}>
                {g.featured ? "Sundays" : g.name} {g.time}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-3.5 text-violet-light">Talk to us</p>
          <ul className="space-y-1 leading-relaxed">
            <li>
              <a className="text-haze hover:text-white" href={`tel:${site.contact.phone.replace(/\s+/g, "")}`}>
                {site.contact.phone}
              </a>
            </li>
            <li>
              <a className="break-all text-haze hover:text-white" href={`mailto:${site.contact.email}`}>
                {site.contact.email}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-3.5 text-violet-light">Follow</p>
          <ul className="space-y-1 leading-relaxed">
            <li><a className="text-violet-light hover:text-violet-pale" href={site.social.youtube} target="_blank" rel="noreferrer">YouTube</a></li>
            <li><a className="text-violet-light hover:text-violet-pale" href={site.social.instagram} target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a className="text-violet-light hover:text-violet-pale" href={site.social.facebook} target="_blank" rel="noreferrer">Facebook</a></li>
          </ul>
        </div>
      </div>

      <p className="text-sm text-[#9d90a6]">
        © {new Date().getFullYear()} {site.name}
      </p>
    </div>
  </footer>
);

export default SiteFooter;
