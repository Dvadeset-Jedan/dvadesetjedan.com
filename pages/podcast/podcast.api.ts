import { useQuery } from "@tanstack/react-query";
import { UseQueryResult } from "@tanstack/react-query";
import { getSlug } from "./index.page";
import { AnchorRSSReturnType, Episode } from "./podcast.types";

const ANCHOR_RSS_REPLIT_PROXY_ENDPOINT =
  "https://dvadesetjedan-anchor-rss-proxy.djordjespasic.repl.co/";

type UsePodcastEpisodeProps = {
  episodeSlug?: string;
};

export async function fetchPodcastEpisodes() {
  const res = await fetch(ANCHOR_RSS_REPLIT_PROXY_ENDPOINT).then((res) => res.json());
  return res;
}

export function usePodcastEpisodes(props?: UsePodcastEpisodeProps) {
  const { episodeSlug } = props || {};

  const query: UseQueryResult<AnchorRSSReturnType & { episodes?: Episode[] }> = useQuery({
    queryKey: ["episodes"],
    queryFn: () => fetchPodcastEpisodes(),
  });

  return {
    ...query,
    episodes: query.data?.items,
    ...(episodeSlug
      ? { episode: query.data?.items?.find((e) => getSlug(e.link) === episodeSlug) }
      : {}),
  };
}
