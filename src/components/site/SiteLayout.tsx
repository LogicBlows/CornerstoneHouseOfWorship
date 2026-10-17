import { ReactNode, useEffect } from "react";
import { site } from "@/config/site";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

type SiteLayoutProps = {
  /** Page name for the browser tab; omit on the home page. */
  title?: string;
  description?: string;
  headerVariant?: "overlay" | "solid";
  className?: string;
  children: ReactNode;
};

const SiteLayout = ({ title, description, headerVariant = "solid", className, children }: SiteLayoutProps) => {
  useEffect(() => {
    document.title = title ? `${title} · ${site.name}` : site.name;
    if (description) {
      document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    }
  }, [title, description]);

  return (
    <div className={className}>
      <SiteHeader variant={headerVariant} />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
};

export default SiteLayout;
