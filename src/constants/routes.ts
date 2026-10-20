/** Central route map — clinic pages first, foundation as a dedicated subset. */
export const RouteNames = {
  Home: "/",
  AboutPage: "/about",
  OurWorld: "/our-world",
  Foundation: "/foundation",
  About: "/#about",
  Services: "/#services",
  Gallery: "/#gallery",
  FAQ: "/#faq",
  Contact: "/#contact",
  ContactPage: "/contact",
} as const;

export type RouteName = (typeof RouteNames)[keyof typeof RouteNames];

export const NAV_ITEMS: { href: string; label: string }[] = [
  { href: RouteNames.Home, label: "Home" },
  { href: RouteNames.Services, label: "Services" },
  { href: RouteNames.About, label: "About" },
  { href: RouteNames.Gallery, label: "Gallery" },
  { href: RouteNames.Foundation, label: "Foundation" },
  { href: RouteNames.Contact, label: "Contact" },
];
