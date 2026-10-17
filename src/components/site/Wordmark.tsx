import { cn } from "@/lib/utils";
import markWhite from "@/assets/logo-mark-white.png";

type WordmarkProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizes = {
  sm: { mark: "h-[34px]", script: "text-[28px]", caps: "text-[8px] tracking-[0.3em] mt-[3px]" },
  md: { mark: "h-[42px]", script: "text-[34px]", caps: "text-[10px] tracking-[0.32em] mt-1" },
  lg: { mark: "h-[72px] sm:h-[84px]", script: "text-[56px] sm:text-[76px]", caps: "text-xs sm:text-sm tracking-[0.4em] mt-2" },
};

/** The house mark plus "Cornerstone / HOUSE OF WORSHIP", matching the church logo. */
const Wordmark = ({ size = "md", className }: WordmarkProps) => {
  const s = sizes[size];
  return (
    <span className={cn("flex items-center gap-3 text-white", className)}>
      <img src={markWhite} alt="" className={cn("w-auto", s.mark)} />
      <span className="flex flex-col leading-none">
        <span className={cn("font-script leading-[0.9]", s.script)}>Cornerstone</span>
        <span className={cn("font-semibold", s.caps)}>HOUSE OF WORSHIP</span>
      </span>
    </span>
  );
};

export default Wordmark;
