import IconMail from "@/assets/icons/IconMail.svg";
import IconGitHub from "@/assets/icons/IconGitHub.svg";
import IconBrandX from "@/assets/icons/IconBrandX.svg";
import IconLinkedin from "@/assets/icons/IconLinkedin.svg";
import IconWhatsapp from "@/assets/icons/IconWhatsapp.svg";
import IconFacebook from "@/assets/icons/IconFacebook.svg";
import IconTelegram from "@/assets/icons/IconTelegram.svg";
import IconPinterest from "@/assets/icons/IconPinterest.svg";
import { SITE } from "@/config";

export const SOCIALS = [
  {
    name: "Github",
    href: "https://github.com/nguyengiabach1201",
    linkTitle: `Me on Github`,
    icon: IconGitHub,
  },
  {
    name: "X",
    href: "https://x.com/giabach1201",
    linkTitle: `Me on X`,
    icon: IconBrandX,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/nguyengiabach1201/",
    linkTitle: `Me on Facebook`,
    icon: IconFacebook,
  },
  {
    name: "Mail",
    href: "mailto:nguyengiabach1201@gmail.com",
    linkTitle: `Send an email to Me`,
    icon: IconMail,
  },
] as const;

export const SHARE_LINKS = [
  {
    name: "WhatsApp",
    href: "https://wa.me/?text=",
    linkTitle: `Share this post via WhatsApp`,
    icon: IconWhatsapp,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/sharer.php?u=",
    linkTitle: `Share this post on Facebook`,
    icon: IconFacebook,
  },
  {
    name: "X",
    href: "https://x.com/intent/post?url=",
    linkTitle: `Share this post on X`,
    icon: IconBrandX,
  },
  {
    name: "Telegram",
    href: "https://t.me/share/url?url=",
    linkTitle: `Share this post via Telegram`,
    icon: IconTelegram,
  },
  {
    name: "Pinterest",
    href: "https://pinterest.com/pin/create/button/?url=",
    linkTitle: `Share this post on Pinterest`,
    icon: IconPinterest,
  },
  {
    name: "Mail",
    href: "mailto:?subject=See%20this%20post&body=",
    linkTitle: `Share this post via email`,
    icon: IconMail,
  },
] as const;
