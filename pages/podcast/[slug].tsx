import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { EpisodePreview } from "../../components/episode-preview";
import episodesJSON from "../../content/episodes.json";
import { routes } from "../../utils/routes";
import { Episode } from "../../utils/types";

export default function Podcast({ episodes }: { episodes: Episode[] }) {
  const router = useRouter();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => setHasMounted(true), []);

  if (!hasMounted) {
    return null;
  }

  const episode = episodes.find((episode) => episode.slug === router.query.slug) as Episode;

  return (
    <main className="text-center bg-dark">
      <div className="py-10 lg:py-20 bg-dark brightness-110">
        <div className="w-[90%] m-auto xl:w-3/5">
          <h1 className="text-2xl font-semibold">{episode?.title}</h1>
          <p className="mt-3 text-xl md:text-xl text-gray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor ultrices
            pulvinar eu sem enim dolor tellus. Ante aenean varius cras ac ante feugiat.
          </p>
        </div>
        <div className="w-[90%] m-auto mt-20 lg:w-3/5">
          {episode && (
            <iframe
              src={`https://anchor.fm/dvadesetjedan/embed/episodes/${episode.slug}`}
              scrolling="no"
              className="w-full h-[8rem] lg:h-[10.6rem]"
            />
          )}
        </div>
      </div>
      <div className="w-[90%] m-auto mb-20 lg:w-3/5">
        <div className="h-[400px]">
          <h2 className="text-2xl md:text-[2.5rem] font-bold mb-14 mt-20">Show notes</h2>
          <p className="text-lg italic text-gray">⏳ Coming soon...</p>
        </div>

        <h2 className="text-2xl md:text-[2.5rem] font-bold mb-14 mt-32">
          Episodes you might enjoy
        </h2>
        {[...episodes].splice(0, 3).map(({ slug, title, descriptionPreview }) => (
          <EpisodePreview
            key={slug}
            title={`${title.slice(0, 40)}...`}
            description={`${descriptionPreview.slice(0, 125)}...`}
            href={routes.podcastEpisode(slug)}
          />
        ))}
      </div>
    </main>
  );
}

export async function getStaticPaths() {
  const paths = episodesJSON.map((e) => ({ params: { id: e.slug, slug: e.slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps() {
  return {
    props: {
      episodes: episodesJSON,
    },
  };
}
