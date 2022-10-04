import Image from "next/image";
import { EventType } from "../utils/types";

export function MeetupPreview({ url, imgSrc, date, venue, address }: EventType) {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <div className="flex flex-col">
        <Image
          src={imgSrc}
          width={300}
          height={220}
          layout="responsive"
          alt=""
          className="rounded-2xl"
        />
        <div className="flex flex-col">
          <p className="mt-6 font-medium text-purple">{date}</p>
          <p className="mt-2 font-medium text-21">{venue}</p>
          <p className="mt-2 font-medium text-gray">{address}</p>
        </div>
      </div>
    </a>
  );
}
