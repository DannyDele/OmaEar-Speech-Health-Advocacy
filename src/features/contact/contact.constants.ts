import { CONTACT, SOCIAL } from "@/constants/site";
import type { ContactChannel } from "./contact.types";

export const CONTACT_CHANNELS: ContactChannel[] = [
  {
    icon: "MessageCircle",
    label: "WhatsApp",
    value: CONTACT.whatsapp,
    href: SOCIAL.whatsappUrl,
    cta: "Chat on WhatsApp",
    external: true,
  },
  {
    icon: "Phone",
    label: "Phone",
    value: CONTACT.phone,
    href: SOCIAL.phoneUrl,
    cta: "Call Now",
  },
  {
    icon: "Mail",
    label: "Email",
    value: CONTACT.email,
    href: SOCIAL.emailUrl,
    cta: "Send Email",
  },
  {
    icon: "MapPin",
    label: "Address",
    value: CONTACT.address,
    href: `https://maps.google.com/?q=${CONTACT.mapQuery}`,
    cta: "Open in Maps",
    external: true,
  },
];
