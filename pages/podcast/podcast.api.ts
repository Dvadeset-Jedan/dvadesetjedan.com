import Parser from "rss-parser";
import { AnchorRSSReturnType } from "./podcast.types";

const ANCHOR_ENDPOINT_URL = "https://anchor.fm/s/962ca164/podcast/rss";

export async function fetchPodcastEpisodes() {
  const feed = (await new Parser().parseURL(ANCHOR_ENDPOINT_URL)) as any;
  return feed as AnchorRSSReturnType;
}
