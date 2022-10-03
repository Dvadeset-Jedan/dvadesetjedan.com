import { EpisodePreview } from "./episode-preview";
import episodes from "../content/episodes.json";
import { routes } from "../utils/routes";
import Link from "next/link";

function truncate(text: string, length: number) {
  if (text.length > length) {
    return `${text.slice(0, length)}...`;
  }

  return text;
}

export function PodcastSection() {
  return (
    <section className="mt-32">
      <h2 className="text-[2.5rem] font-bold mb-14 text-center">Recent Podcast Episodes</h2>
      <div className="lg:px-20">
        {episodes.splice(0, 3).map(({ slug, title, descriptionPreview }) => (
          <EpisodePreview
            key={slug}
            title={truncate(title, 100)}
            description={truncate(descriptionPreview, 220)}
            href={routes.podcastEpisode(slug)}
          />
        ))}
      </div>
      <div className="flex justify-center w-full mt-16">
        <Link href={routes.podcast}>
          <a
            className="px-6 py-3 border rounded-full text-purple border-purple"
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
