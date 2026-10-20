import BackToTopButton from "@/components/shared/BackToTopButton";
import Footer from "./Footer";
import Header from "./Header";

/** Site chrome shared by every App Router page. Header is fixed so main gets pt to compensate. */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-shell flex min-h-dvh flex-col">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Header />
      {/* pt-16 md:pt-20 offsets the fixed header height */}
      <main id="main-content" tabIndex={-1} className="flex-1 pt-16 md:pt-20 outline-none">
        {children}
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
}
