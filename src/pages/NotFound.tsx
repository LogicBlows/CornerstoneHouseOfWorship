import { Link } from "react-router-dom";
import SiteLayout from "@/components/site/SiteLayout";

const NotFound = () => (
  <SiteLayout title="Page not found">
    <section className="py-28 text-center sm:py-40">
      <div className="wrap">
        <p className="eyebrow mb-6 text-violet-light">404</p>
        <h1 className="mb-6 font-serif text-[56px] font-medium leading-none sm:text-[88px]">
          This page has <em className="text-violet-pale">wandered off.</em>
        </h1>
        <p className="mx-auto mb-10 max-w-md text-lg text-mist">The page you're looking for doesn't exist or has moved.</p>
        <Link to="/" className="pill pill-light">
          Back to home
        </Link>
      </div>
    </section>
  </SiteLayout>
);

export default NotFound;
