import { EpisodePlayer } from "./episode-player";
import { EpisodePreview } from "./episode-preview";
import { BarcodeSectionIcon } from "./icons/barcode-section";
import episodes from "../content/episodes.json";

export function PodcastSection() {
  const [episode] = episodes;

  return (
    <section>
      <div className="flex items-center justify-between mt-40 mb-20">
        <h2 className="text-[3.5rem] font-medium">Latest podcast</h2>
        <BarcodeSectionIcon />
      </div>
      <EpisodePlayer episode={episode} />
      <div className="px-8 lg:px-14 xl:px-24">
        <div className="mt-8">
          <EpisodePreview
            date="Episode #20"
            location="Discussing the implications of hyperbitcoinization."
          />
        </div>
        <div className="mt-8">
          <EpisodePreview
            date="Episode #19"
            location="Why proof of work is essential to a new form of money."
          />
        </div>
      </div>
    </section>
  );
}
