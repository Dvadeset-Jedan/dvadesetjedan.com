import { EpisodePreview } from "./episode-preview";
import { routes } from "../utils/routes";
import Link from "next/link";
import { getSlug } from "../pages/podcast/index.page";
import { Episode } from "../pages/podcast/podcast.types";

export function truncate(text: string, length: number) {
  if (text.length > length) {
    return `${text.slice(0, length)}...`;
  }

  return text;
}

export function PodcastSection({ episodes }: { episodes: Episode[] }) {
  return (
    <section className="mt-32">
      <h2 className="text-3xl md:text-[2.5rem] font-bold mb-14 text-center">
        Nedavne epizode podcasta
      </h2>
      <div className="lg:px-20">
        {[...(episodes || [])]?.splice(0, 3).map(({ link, title, contentSnippet }) => (
          <EpisodePreview
            key={getSlug(link)}
            title={title}
            description={truncate(contentSnippet, 140)}
            href={routes.podcastEpisode(getSlug(link))}
          />
        ))}
      </div>
      <div className="flex justify-center w-full mt-16">
        <Link href={routes.podcast}>
          <a className="px-6 py-3 text-xl border rounded-full md:text-base text-purple border-purple">
            Sve epizode
          </a>
        </Link>
      </div>
    </section>
  );
}
