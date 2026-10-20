import { cn } from "@/lib/utils";

type PortraitProps = {
  name: string;
  photo?: string;
  /** "light" for ivory sections, "dark" for night sections. */
  tone?: "light" | "dark";
  className?: string;
};

/** A person's photo in the church-window arch, or their initial when there is no photo. */
const Portrait = ({ name, photo, tone = "light", className }: PortraitProps) => (
  <div
    className={cn(
      "arch flex aspect-[3/4] items-center justify-center",
      !photo && (tone === "light" ? "border border-dashed border-[#a593b0] bg-[#e8dcef]" : "border border-dashed border-[#5a4766] bg-plum"),
      className,
    )}
  >
    {photo ? (
      <img src={photo} alt={name} loading="lazy" className="h-full w-full object-cover" />
    ) : (
      <span className={cn("font-serif text-5xl", tone === "light" ? "text-slate" : "text-mist")} aria-hidden="true">
        {name.replace(/^(Ps\.|Pastor|Apostle|Rev\.|Dr\.)\s+/i, "").trim().charAt(0)}
      </span>
    )}
  </div>
);

export default Portrait;
