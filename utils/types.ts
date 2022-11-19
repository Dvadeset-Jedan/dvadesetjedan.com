import { FlagType } from "../components/flag";
import events from "../content/events.json";
import { ArticleSlug } from "./routes";

export type EventType = typeof events[number];

export type Frontmatter = {
  author: string;
  authorURL: string;
  tags: string[];
  title: string;
  meta: string;
  translator: string;
  translatorURL: string;
  img: string;
  flag: FlagType;
  slug: ArticleSlug;
};
