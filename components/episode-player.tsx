import Image from "next/image";
import { Episode } from "../utils/types";
import { useEffect, useRef, useState } from "react";
import { PlayIcon } from "./icons/play";
import { PauseIcon } from "./icons/pause";
import { images } from "../utils/images";
import { intervalToDuration } from "date-fns";

export function EpisodePlayer({ episode }: { episode: Episode }) {
  const audioPlayer = useRef<any>();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTimeInSeconds, setCurrentTimeInSeconds] = useState(0);
  const duration = intervalToDuration({ start: 0, end: episode.duration * 1000 });

  const currentTime = intervalToDuration({
    start: 0,
    end: currentTimeInSeconds * 1000,
  });

  const formattedCurrentTime = [currentTime.hours, currentTime.minutes, currentTime.seconds]
    .map((n) => String(n).padStart(2, "0"))
    .join(":");

  const formattedDuration = [duration.hours, duration.minutes, duration.seconds]
    .map((n) => String(n).padStart(2, "0"))
    .join(":");

  function togglePlay() {
    setIsPlaying(!isPlaying);

    if (isPlaying) {
      audioPlayer?.current?.pause?.();
    } else {
      audioPlayer?.current?.play?.();
    }
  }

  useEffect(() => {
    setCurrentTimeInSeconds(audioPlayer?.current?.currentTime);

    const interval = setInterval(() => {
      setCurrentTimeInSeconds(audioPlayer?.current?.currentTime);
    }, 1000);
    if (!isPlaying) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="flex bg-dark brightness-110">
      <div className="w-40 h-40">
        <Image src={images.dvadesetJedan} width={160} height={160} layout="fixed" alt="" />
      </div>
      <div className="flex flex-col w-full px-4 py-3 text-left bg-neutral-200 text-dark">
        <p className="text-2xl font-bold">🎙 ₿Φ 19: Baltic Honeybadger 2022</p>
        <p className="text-xs text-dark">Dvadeset Jedan - Bitcoin Only podcast Balkan</p>
        <button onClick={togglePlay} className="mt-5 text-left">
          <span className="sr-only">{isPlaying ? "play" : "pause"}</span>
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>
        <audio ref={audioPlayer} autoPlay={false} src={episode.enclosure.url} />
        <div className="flex justify-between mt-auto text-xs text-dark">
          <span>{formattedCurrentTime}</span>
          <span>{formattedDuration}</span>
        </div>
      </div>
    </div>
  );
}

const zeroPad = (n: number) => String(n).padStart(2, "0");
