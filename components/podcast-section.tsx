import { EpisodePreview } from "./episode-preview";
import { routes } from "../utils/routes";
import { getSlug } from "../pages/podcast/index.page";
import { ActionLink } from "./action-link";
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
      <div className="grid grid-cols-1 px-4 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {episodes.slice(0, 3).map(({ link, title, contentSnippet, itunes }) => (
          <EpisodePreview
            imgSrc={itunes.image}
            key={getSlug(link)}
            title={title}
            description={truncate(contentSnippet, 140)}
            href={routes.podcastEpisode(getSlug(link))}
          />
        ))}
      </div>
      <div className="flex justify-center w-full mt-16">
        <ActionLink internal href={routes.podcast}>
          Sve epizode
        </ActionLink>
      </div>
    </section>
  );
}
