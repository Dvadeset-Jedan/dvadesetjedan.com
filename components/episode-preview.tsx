import Link from "next/link";
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
      <a className="flex flex-col items-center cursor-pointer bg-dark brightness-110 rounded-2xl hover:brightness-[120%] hover:transition-all hover:duration-500">
        <div className="w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={imgSrc} alt={title} className="rounded-t-2xl" />
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
