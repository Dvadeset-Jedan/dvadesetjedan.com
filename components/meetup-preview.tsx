import Image from "next/image";
import { EventType } from "../utils/types";

export function MeetupPreview({ url, imgSrc, date, venue, address }: EventType) {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <div className="flex flex-col">
        <div style={{ width: 300, height: 220 }}>
          <Image
            src={imgSrc}
            width={300}
            height={220}
            layout="fixed"
            alt=""
            className="rounded-2xl"
          />
        </div>
        <div className="flex flex-col">
          <p className="mt-6 font-medium text-purple">{date}</p>
          <p className="mt-2 font-medium text-21">{venue}</p>
          <p className="mt-2 font-medium text-gray">{address}</p>
        </div>
      </div>
    </a>
  );
}
