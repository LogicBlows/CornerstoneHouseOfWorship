// Site content is stored as JSON in src/content/ and edited through the CMS
// at /admin (see public/admin/config.yml). This module gives the pages typed access to it.
// Values in [square brackets] are placeholders still to be filled in.

import church from "@/content/church.json";
import schedule from "@/content/schedule.json";
import leadersFile from "@/content/leaders.json";
import ministriesFile from "@/content/ministries.json";
import beliefsFile from "@/content/beliefs.json";
import messagesFile from "@/content/messages.json";
import testimoniesFile from "@/content/testimonies.json";
import homePage from "@/content/pages/home.json";
import watchPage from "@/content/pages/watch.json";
import prayPage from "@/content/pages/pray.json";
import momentsPage from "@/content/pages/moments.json";
import ourHousePage from "@/content/pages/our-house.json";
import footerText from "@/content/pages/footer.json";

export const site = {
  ...church,
  // Where prayer requests are sent (e.g. a Formspree form URL).
  // Leave empty while building locally: the form then only logs to the console.
  prayerFormEndpoint: "",
};

export const whatsappLink = (text?: string) =>
  site.contact.whatsappNumber
    ? `https://wa.me/${site.contact.whatsappNumber.replace(/\D/g, "")}${text ? `?text=${encodeURIComponent(text)}` : ""}`
    : "#";

export const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as const;

export type Gathering = {
  day: (typeof weekDays)[number];
  name: string;
  time: string;
  where?: string;
  /** The main service: highlighted, and its time is used in the header button. */
  featured?: boolean;
  /** Listed under "Pray with us" on the Pray page. */
  prayer?: boolean;
};

export const gatherings = schedule.gatherings as Gathering[];
export const sundayGatherings = gatherings.filter((g) => g.day === "Sun");
export const mainService = gatherings.find((g) => g.featured) ?? gatherings[0];

export type Leader = { name: string; role: string; photo?: string; showOnHome?: boolean };
export const leaders = leadersFile.leaders as Leader[];

export const ministries = ministriesFile.ministries;
export const beliefs = beliefsFile.beliefs;
export const testimonies = testimoniesFile.testimonies;

export type Speaker = "pastor" | "apostle";

export type Message = {
  title: string;
  speaker: Speaker;
  date: string;
  scripture?: string;
  summary?: string;
  // The part after "watch?v=" in a YouTube link.
  youtubeId?: string;
};

/** Accepts a full YouTube link (watch, youtu.be, live, shorts) or a bare video id. */
const toYoutubeId = (value?: string) => {
  if (!value) return undefined;
  const match = value.match(/(?:v=|youtu\.be\/|\/live\/|\/shorts\/|\/embed\/)([\w-]{11})/);
  return match ? match[1] : /^[\w-]{11}$/.test(value.trim()) ? value.trim() : undefined;
};

export const speakers = messagesFile.speakers as Record<Speaker, { name: string; series: string }>;
// Newest first. The first message is featured on the home and Watch pages.
export const messages = (messagesFile.messages as Message[]).map((m) => ({ ...m, youtubeId: toYoutubeId(m.youtubeId) }));

export const pages = {
  home: homePage,
  watch: watchPage,
  pray: prayPage,
  moments: momentsPage,
  ourHouse: ourHousePage,
  footer: footerText,
};

export const prayerTopics = prayPage.topics;
