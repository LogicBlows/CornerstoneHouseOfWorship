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

export const MAX_PAST_MESSAGES = 4;

type MessageEntry = {
  title?: string;
  speaker?: Speaker;
  date?: string;
  scripture?: string;
  summary?: string;
  /** Full YouTube link to the sermon. */
  youtube?: string;
  /** Optional uploaded cover image; otherwise YouTube's own thumbnail is used. */
  thumbnail?: string;
};

export type Message = {
  title: string;
  speaker: Speaker;
  date: string;
  scripture?: string;
  summary?: string;
  youtubeId?: string;
  /** Link to watch the video on YouTube, if there is one. */
  watchUrl?: string;
  /** Cover image: the uploaded thumbnail, else YouTube's, else none. */
  thumbnail?: string;
};

/** Accepts a full YouTube link (watch, youtu.be, live, shorts) or a bare video id. */
const toYoutubeId = (value?: string) => {
  if (!value) return undefined;
  const match = value.match(/(?:v=|youtu\.be\/|\/live\/|\/shorts\/|\/embed\/)([\w-]{11})/);
  return match ? match[1] : /^[\w-]{11}$/.test(value.trim()) ? value.trim() : undefined;
};

const toMessage = (m: MessageEntry): Message | null => {
  if (!m?.title) return null;
  const youtubeId = toYoutubeId(m.youtube);
  return {
    title: m.title,
    speaker: m.speaker === "apostle" ? "apostle" : "pastor",
    date: m.date ?? "",
    scripture: m.scripture,
    summary: m.summary,
    youtubeId,
    watchUrl: youtubeId ? `https://www.youtube.com/watch?v=${youtubeId}` : undefined,
    thumbnail: m.thumbnail || (youtubeId ? `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg` : undefined),
  };
};

export const speakers = messagesFile.speakers as Record<Speaker, { name: string; series: string; channel?: string }>;
/** The church's own YouTube channel (Watch page link, else the social link). */
export const churchChannel = watchPage.channelUrl || site.social.youtube;
/** A speaker's YouTube channel, falling back to the church channel. */
export const speakerChannel = (speaker: Speaker) => speakers[speaker].channel || churchChannel;
/** The featured message on the home and Watch pages. */
export const latestMessage = toMessage(messagesFile.latest as MessageEntry);
/** Up to four earlier messages, in the order set in the editor. */
export const pastMessages = ((messagesFile.past ?? []) as MessageEntry[])
  .map(toMessage)
  .filter((m): m is Message => m !== null)
  .slice(0, MAX_PAST_MESSAGES);
/** Latest first, then past messages. */
export const messages = [latestMessage, ...pastMessages].filter((m): m is Message => m !== null);

export const pages = {
  home: homePage,
  watch: watchPage,
  pray: prayPage,
  moments: momentsPage,
  ourHouse: ourHousePage,
  footer: footerText,
};

export const prayerTopics = prayPage.topics;
