import { ApplePodcastIcon } from "./icons/apple-podcast";
import { SpotifyIcon } from "./icons/spotify";
import { YoutubeIcon } from "./icons/youtube";

export function PodcastActions({ title }: { title: string }) {
  return (
    <div className="mt-14">
      <span className="text-sm text-gray">{title}</span>
      <div className="flex justify-center mt-4">
        <a
          href="https://open.spotify.com/show/0K4Ak2oNQdCU3Tsr3Tajkx"
          target="_blank"
          rel="noreferrer"
        >
          <SpotifyIcon />
        </a>
        <a
          href="https://www.youtube.com/channel/UCYXly5XM_SO07vLHh2yPlCw"
          target="_blank"
          rel="noreferrer"
        >
          <YoutubeIcon className="ml-4" />
        </a>
        <a
          href="https://podcasts.apple.com/us/podcast/dvadeset-jedan-bitcoin-only-podcast-balkan/id1623576900"
          target="_blank"
          rel="noreferrer"
        >
          <ApplePodcastIcon className="ml-4" />
        </a>
      </div>
    </div>
  );
}
