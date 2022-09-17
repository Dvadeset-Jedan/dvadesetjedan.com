import ExportedImage from "next-image-export-optimizer";
import { Episode } from "../utils/types";
import { useRef, useState } from "react";
import { PlayIcon } from "./icons/play";

export function EpisodePlayer({ episode }: { episode: Episode }) {
  const audioPlayer = useRef<any>();
  const [isPlaying, setIsPlaying] = useState(false);

  function togglePlay() {
    setIsPlaying(!isPlaying);

    if (isPlaying) {
      audioPlayer?.current?.pause?.();
    } else {
      audioPlayer?.current?.play?.();
    }
  }

  return (
    <div className="flex bg-dark brightness-110">
      <div>
        <ExportedImage
          src="images/player.jpg"
          width={270}
          height={270}
          layout="fixed"
          alt=""
          unoptimized
          placeholder="blur"
        />
      </div>
      <div className="flex justify-between w-full pl-6 pr-6 xl:pr-8 xl:pl-8 py-7">
        <div>
          <p className="text-xl font-medium text-purple">Episode #21</p>
          <p className="text-4xl font-medium text-white leading-8 xl:text-[2.375rem] mt-3">
            Bitcoin is for everyone
          </p>
          <button onClick={togglePlay} className="mt-8">
            <PlayIcon />
          </button>
          <audio ref={audioPlayer} autoPlay={false} src={episode.enclosure.url} />
        </div>
        <a href={episode.enclosure.url} download className="self-end text-21 text-purple">
          Download
        </a>
      </div>
    </div>
  );
}
