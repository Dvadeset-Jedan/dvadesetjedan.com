import { useRouter } from "next/router";
import { EpisodePreview } from "../../components/episode-preview";
import { PodcastActions } from "../../components/podcast-actions";
import { truncate } from "../../components/podcast-section";
import { routes } from "../../utils/routes";
import { getSlug } from "./index.page";
import { fetchPodcastEpisodes } from "./podcast.api";
import styles from "../../styles/blog.module.scss";
import classNames from "classnames";
import { GetStaticPaths, InferGetStaticPropsType } from "next";

export default function Podcast({ episodes }: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  const episode = episodes.find((e) => getSlug(e.link) === router.query.slug);

  return (
    <main className="text-center bg-dark">
      <div className="py-10 lg:py-20 bg-dark brightness-110">
        <div className="w-[90%] m-auto xl:w-3/5">
          <h1 className="text-2xl font-semibold">{episode?.title || ""}</h1>
        </div>
        <div className="w-[90%] m-auto mt-20 lg:w-3/5">
          {episode && (
            <iframe
              src={`https://anchor.fm/yirmibirbitcoin/embed/episodes/${getSlug(episode.link)}`}
              scrolling="no"
              className="w-full h-[8rem] lg:h-[10.6rem]"
            />
          )}
        </div>
        <PodcastActions title="Bizi dinleyin" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="w-[90%] m-auto mb-20">
          <h2 className="text-2xl md:text-[2.5rem] font-bold mb-14 mt-20">Podcast Notları</h2>
          {episode?.content && (
            <article
              className={classNames(
                styles.markdown,
                "prose mx-auto text-white text-left overflow-hidden"
              )}
              dangerouslySetInnerHTML={{ __html: episode.content }}
            />
          )}

          <h2 className="text-2xl md:text-[2rem] font-bold mb-14 mt-32">
            Keyifle dinleyeceğiniz diğer bölümler
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
        </div>
      </div>
    </main>
  );
}


export const getStaticPaths: GetStaticPaths = async () => {
  const episodes = await fetchPodcastEpisodes();
  return {
    paths: episodes.items?.map((episode) => ({ params: { slug: getSlug(episode.link) } })),
    fallback: false,
  };
};

export async function getStaticProps() {
  const episodes = await fetchPodcastEpisodes();

  return {
    props: { episodes: episodes?.items || [] },
  };
}
