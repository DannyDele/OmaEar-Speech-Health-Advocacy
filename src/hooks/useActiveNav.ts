"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { RouteNames } from "@/constants/routes";

/** Homepage sections that map to a desktop nav item, in document order. */
const HOME_SECTIONS: { id: string; href: string }[] = [
  { id: "home", href: RouteNames.Home },
  { id: "services", href: RouteNames.Services },
  { id: "about", href: RouteNames.About },
  { id: "gallery", href: RouteNames.Gallery },
  { id: "contact", href: RouteNames.Contact },
];

/** Keep the spy line just below the fixed header so the active link matches what the visitor is reading. */
const HEADER_OFFSET = 110;

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Smooth-scroll to a homepage section. Returns false when the target is not on this page. */
export function scrollToNavTarget(href: string) {
  const id = href === RouteNames.Home ? "home" : href.split("#")[1];
  if (!id) return false;

  const el = document.getElementById(id);
  if (!el) return false;

  /* scrollTo + offset is more reliable than scrollIntoView with a fixed header. */
  const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  window.scrollTo({
    top: Math.max(0, top),
    behavior: prefersReducedMotion() ? "auto" : "smooth",
  });

  window.history.pushState(null, "", href);
  return true;
}

/**
 * Resolves which nav href is current: dedicated pages first, then
 * a scroll-spy on the homepage so hash links light up as you move.
 */
export function useActiveNav() {
  const pathname = usePathname();
  const [homeHref, setHomeHref] = useState<string>(RouteNames.Home);

  useEffect(() => {
    if (pathname !== RouteNames.Home) return;

    const update = () => {
      let current: string = RouteNames.Home;
      for (const section of HOME_SECTIONS) {
        const el = document.getElementById(section.id);
        if (!el) continue;
        // Last section whose top has crossed the header line wins.
        if (el.getBoundingClientRect().top - HEADER_OFFSET <= 0) {
          current = section.href;
        }
      }
      setHomeHref(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [pathname]);

  /* After arriving from another route with a hash, finish with a smooth scroll. */
  useEffect(() => {
    if (pathname !== RouteNames.Home) return;
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;

    const timeout = window.setTimeout(() => {
      document.getElementById(hash)?.scrollIntoView({
        behavior: prefersReducedMotion() ? "auto" : "smooth",
        block: "start",
      });
    }, 80);

    return () => window.clearTimeout(timeout);
  }, [pathname]);

  if (pathname === RouteNames.Foundation) return RouteNames.Foundation;
  if (pathname === RouteNames.AboutPage) return RouteNames.About;
  if (pathname === RouteNames.OurWorld) return RouteNames.Gallery;
  if (pathname === RouteNames.ContactPage) return RouteNames.Contact;
  if (pathname === RouteNames.Home) return homeHref;
  return "";
}
