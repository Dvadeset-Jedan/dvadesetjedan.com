import { useState } from "react";
import { EpisodePreview } from "../../components/episode-preview";
import episodes from "../../content/episodes.json";
import { routes } from "../../utils/routes";

export default function Podcast() {
  const [showAllEpisodes, setShowAllEpisodes] = useState(false);
  const [lastEpisode, ...otherEpisodes] = episodes;
  const newerEpisodes = otherEpisodes.splice(0, 10);
  const olderEpisodes = otherEpisodes.splice(10);

  return (
    <main className="text-center bg-dark">
      <div className="py-20 bg-dark brightness-110">
        <div className="m-auto xl:w-3/5">
          <h1 className="text-[2.5rem] font-semibold">Dvadeset Jedan - Bitcoin Only Podcast</h1>
          <p className="mt-3 text-lg text-gray">{`${lastEpisode.descriptionPreview.slice(
            0,
            300
          )}...`}</p>
        </div>
        <div className="w-5/6 m-auto mt-20 lg:w-3/5">
          <iframe
            src={`https://anchor.fm/dvadesetjedan/embed/episodes/${lastEpisode.slug}`}
            scrolling="no"
            className="w-full h-[10.6rem]"
          />
        </div>
      </div>
      <div className="m-auto my-20 lg:w-1/2">
        <h2 className="text-[2.5rem] font-bold mb-14">Previous Episodes</h2>
        {newerEpisodes.map(({ slug, title, descriptionPreview }) => (
          <EpisodePreview
            key={slug}
            title={`${title.slice(0, 100)}...`}
            description={`${descriptionPreview.slice(0, 125)}...`}
            href={routes.podcastEpisode(slug)}
          />
        ))}
        {showAllEpisodes &&
          olderEpisodes.map(({ slug, title, descriptionPreview }) => (
            <EpisodePreview
              key={slug}
              title={`${title.slice(0, 100)}...`}
              description={`${descriptionPreview.slice(0, 125)}...`}
              href={routes.podcastEpisode(slug)}
            />
          ))}
        {!showAllEpisodes && (
          <div className="flex justify-center w-full mt-16">
            <button
              onClick={() => setShowAllEpisodes(true)}
              className="px-6 py-3 border rounded-full text-purple border-purple"
            >
              All episodes
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
