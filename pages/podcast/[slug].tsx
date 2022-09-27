import { EpisodePlayer } from "../../components/episode-player";
import { EpisodePreview } from "../../components/episode-preview";
import episodes from "../../content/episodes.json";
import { routes } from "../../utils/routes";

function truncateDescription(description: string) {
  return `${description.slice(0, 125)}...`;
}

function truncateTitle(title: string) {
  return `${title.slice(0, 100)}...`;
}

export default function Podcast() {
  const [lastEpisode, ...otherEpisodes] = episodes;

  return (
    <main className="text-center bg-dark">
      <div className="py-20 bg-dark brightness-110">
        <div className="m-auto xl:w-3/5">
          <h1 className="text-[2.5rem] font-semibold">Dvadeset Jedan - Bitcoin Only Podcast</h1>
          <p className="mt-3 text-lg text-gray">{`${lastEpisode.description.slice(0, 300)}...`}</p>
        </div>
        <div className="w-3/5 m-auto mt-20">
          <EpisodePlayer episode={lastEpisode} />
        </div>
      </div>
      <div className="m-auto my-20 lg:w-1/2">
        <h2 className="text-[2.5rem] font-bold mb-14">Previous Episodes</h2>
        {otherEpisodes.map(({ slug, title, description }) => (
          <EpisodePreview
            key={slug}
            title={truncateTitle(title)}
            description={truncateDescription(description)}
            href={"test"}
          />
        ))}
      </div>
    </main>
  );
}
