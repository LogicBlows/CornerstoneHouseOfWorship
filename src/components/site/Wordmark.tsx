import { cn } from "@/lib/utils";
import logoFull from "@/assets/logo-full-white.png";

type WordmarkProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
};

const heights = {
  sm: "h-11",
  md: "h-16 lg:h-[76px]",
  lg: "h-auto w-[280px] sm:w-[380px] lg:w-[464px]",
};

/** The church logo (house "H" + Cornerstone + HOUSE OF WORSHIP), in white. */
const Wordmark = ({ size = "md", className }: WordmarkProps) => (
  <img src={logoFull} alt="Cornerstone House of Worship" className={cn("block w-auto max-w-none shrink-0", heights[size], className)} />
);

export default Wordmark;
