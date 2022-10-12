import { EpisodePreview } from "./episode-preview";
import { routes } from "../utils/routes";
import Link from "next/link";
import { Episode } from "../utils/types";

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
        Recent Podcast Episodes
      </h2>
      <div className="lg:px-20">
        {[...episodes]?.splice(0, 3).map(({ slug, title, descriptionPreview }) => (
          <EpisodePreview
            key={slug}
            title={truncate(title, 30)}
            description={truncate(descriptionPreview, 140)}
            href={routes.podcastEpisode(slug)}
          />
        ))}
      </div>
      <div className="flex justify-center w-full mt-16">
        <Link href={routes.podcast}>
          <a
            className="px-6 py-3 text-xl border rounded-full md:text-base text-purple border-purple"
            target="_blank"
            rel="noreferrer"
          >
            All episodes
          </a>
        </Link>
      </div>
    </section>
  );
}
