import Image from "next/image";
import Link from "next/link";
import { images } from "../utils/images";
import { truncate } from "./podcast-section";

export function EpisodePreview({
  title,
  description,
  href,
  imgSrc,
}: {
  title: string;
  description: string;
  href: string;
  imgSrc: string;
}) {
  return (
    <Link href={href}>
      <a className="flex flex-col items-center cursor-pointer bg-dark brightness-110 rounded-2xl hover:brightness-125 hover:transition-all">
        <div className="w-full">
          <Image
            src={imgSrc || images.dvadesetJedan}
            className="rounded-t-2xl"
            width={320}
            height={240}
            layout="responsive"
            alt=""
          />
        </div>
        <div className="px-3 pb-3">
          <h2 className="text-xl font-semibold truncate md:block md:text-xl whitespace-pre-wrap mt-6">
            {truncate(title, 75)}
          </h2>
          <p className="mt-4 text-lg font-medium md:text-xl text-gray">{description}</p>
        </div>
      </a>
    </Link>
  );
}
