import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://nguyengiabach.com/",
  author: "Nguyễn Gia Bách",
  profile: "https://nguyengiabach.com/",
  desc: "Welcome to my blog",
  title: "Blogs",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  editPost: {
    url: "https://github.com/satnaing/astro-paper/edit/main/src/content/blog",
    text: "Suggest Changes",
    appendFilePath: true,
  },
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/nguyengiabach1201",
    linkTitle: `Me on Github`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:nguyengiabach1201@gmail.com",
    linkTitle: `Send an email to me`,
    active: true,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/nguyengiabach1201/",
    linkTitle: `Me on Facebook`,
    active: true,
  },
  {
    name: "X",
    href: "https://x.com/giabach1201",
    linkTitle: `Me on X`,
    active: true,
  },
];
