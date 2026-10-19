import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { mainService, site } from "@/config/site";
import Wordmark from "./Wordmark";

const navItems = [
  { label: "Visit", to: "/#visit" },
  { label: "Watch", to: "/watch" },
  { label: "Pray", to: "/pray" },
  { label: "Moments", to: "/moments" },
  { label: "Our House", to: "/our-house" },
];

type SiteHeaderProps = {
  /** "overlay" sits on top of the home hero photo; "solid" is a dark bar. */
  variant?: "overlay" | "solid";
};

const SiteHeader = ({ variant = "solid" }: SiteHeaderProps) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className={cn(variant === "overlay" ? "absolute inset-x-0 top-0 z-30" : "relative bg-night")}>
      <header className="wrap flex items-center justify-between gap-5 py-4 lg:py-7">
        <Link to="/" aria-label={`${site.name}, home`} className="rounded-md outline-none focus-visible:ring-2 focus-visible:ring-violet-light/70 focus-visible:ring-offset-4 focus-visible:ring-offset-transparent">
          <Wordmark size="md" className="hidden sm:flex" />
          <Wordmark size="sm" className="sm:hidden" />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) =>
            item.to.startsWith("/#") ? (
              <Link key={item.to} to={item.to} className="py-3 text-[15px] font-medium text-[#efe6f6] hover:text-white">
                {item.label}
              </Link>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "border-b-2 py-3 text-[15px] font-medium hover:text-white",
                    isActive ? "border-violet-light text-white" : "border-transparent text-[#efe6f6]",
                  )
                }
              >
                {item.label}
              </NavLink>
            ),
          )}
          <Link to="/#visit" className="pill pill-light min-h-11 px-5">
            Sunday · {mainService.time}
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="flex h-12 w-12 items-center justify-center rounded-full border-[1.5px] border-ivory/50 bg-night/40 text-white lg:hidden"
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </button>
      </header>

      {open && (
        <div role="dialog" aria-modal="true" aria-label="Menu" className="fixed inset-0 z-50 flex flex-col bg-night px-5 pb-8 pt-4">
          <div className="flex items-center justify-between">
            <Wordmark size="sm" />
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="flex h-12 w-12 items-center justify-center rounded-full border-[1.5px] border-ivory/50 text-white"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <nav aria-label="Main" className="mt-10">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="block border-b border-ivory/15 py-3.5 font-serif text-[40px] font-medium text-ivory"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto flex flex-col gap-2.5">
            <p className="eyebrow mb-1.5 text-violet-light">This Sunday · {mainService.time}</p>
            <a className="pill pill-light" href={site.address.mapsUrl} target="_blank" rel="noreferrer">
              Get directions
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default SiteHeader;
