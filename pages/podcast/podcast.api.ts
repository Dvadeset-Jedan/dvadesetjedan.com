import { useQuery, UseQueryResult } from "@tanstack/react-query";
import Parser from "rss-parser";
import { getSlug } from "./index.page";
import { AnchorRSSReturnType, Episode } from "./podcast.types";

const ANCHOR_ENDPOINT = "https://anchor.fm/s/962ca164/podcast/rss";

async function fetchPodcastEpisodes() {
  const feed = await new Parser().parseURL(ANCHOR_ENDPOINT);
  return feed;
}

type UsePodcastEpisodeProps = {
  episodeSlug?: string;
};

export function usePodcastEpisodes(props?: UsePodcastEpisodeProps) {
  const { episodeSlug } = props || {};

  const query: UseQueryResult<AnchorRSSReturnType & { episodes?: Episode[] }> = useQuery(
    ["episodes"],
    fetchPodcastEpisodes
  );

  return {
    ...query,
    episodes: query.data?.items,
    ...(episodeSlug
      ? { episode: query.data?.items?.find((e) => getSlug(e.link) === episodeSlug) }
      : {}),
  };
}
