import { InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import { PodcastActions } from "../../components/podcast-actions";
import { getSlug } from "./index.page";
import { fetchPodcastEpisodes } from "./podcast.api";

export default function Podcast({ episodes }: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  const episode = episodes.find((e: any) => getSlug(e.link) === router.query.slug);

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
        <div className="h-[400px]">
          <h2 className="text-2xl md:text-[2.5rem] font-bold mb-14 mt-20">Beleške iz podcasta</h2>
          <p className="text-lg italic text-gray">⏳ Stiže uskoro...</p>
        </div>

        <h2 className="text-2xl md:text-[2.5rem] font-bold mb-14 mt-32">
          Epizode u kojima ćeš uživati
        </h2>
      </div>
    </main>
  );
}

export async function getStaticPaths() {
  const res = await fetchPodcastEpisodes();
  const paths = res?.items?.map((e) => ({
    params: { id: getSlug(e.link), slug: getSlug(e.link) },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps() {
  const res = await fetchPodcastEpisodes();
  return {
    props: {
      episodes: res.items,
    },
  };
}
