import { useRouter } from "next/router";
import { EpisodePreview } from "../../components/episode-preview";
import { PodcastActions } from "../../components/podcast-actions";
import { truncate } from "../../components/podcast-section";
import { routes } from "../../utils/routes";
import { getSlug } from "./index.page";
import { usePodcastEpisodes } from "./podcast.api";
import styles from "../../styles/blog.module.scss";

export default function Podcast() {
  const router = useRouter();
  const { episodes } = usePodcastEpisodes();
  const episode = episodes?.find((e: any) => getSlug(e.link) === router.query.slug);

  return (
    <main className="text-center bg-dark">
      <div className="py-10 lg:py-20 bg-dark brightness-110">
        <div className="w-[90%] m-auto xl:w-3/5">
          <h1 className="text-2xl font-semibold">{episode?.title}</h1>
        </div>
        <div className="w-[90%] m-auto mt-20 lg:w-3/5">
          {episode && (
            <iframe
              src={`https://anchor.fm/dvadesetjedan/embed/episodes/${getSlug(episode.link)}`}
              scrolling="no"
              className="w-full h-[8rem] lg:h-[10.6rem]"
            />
          )}
        </div>
        <PodcastActions title="Slušajte nas na" />
      </div>
      <div className="w-[90%] m-auto mb-20 lg:w-3/5">
        <h2 className="text-2xl md:text-[2.5rem] font-bold mb-14 mt-20">Beleške iz podcasta</h2>
        {episode?.content && (
          <div className={styles.markdown} dangerouslySetInnerHTML={{ __html: episode.content }} />
        )}

        <h2 className="text-2xl md:text-[2.5rem] font-bold mb-14 mt-32">
          Epizode u kojima ćeš uživati
        </h2>
        <div className="grid grid-cols-1 px-4 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {[...(episodes || [])]?.splice(0, 3).map(({ link, title, contentSnippet }) => (
            <EpisodePreview
              key={getSlug(link)}
              title={title}
              description={truncate(contentSnippet, 140)}
              href={routes.podcastEpisode(getSlug(link))}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
