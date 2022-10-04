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
          <p className="mt-6 text-2xl font-medium md:text-base text-purple">{date}</p>
          <p className="mt-2 text-3xl font-medium md:text-2xl">{venue}</p>
          <p className="mt-2 text-2xl font-medium md:text-base text-gray">{address}</p>
        </div>
      </div>
    </a>
  );
}
