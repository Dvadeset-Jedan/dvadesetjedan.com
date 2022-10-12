import Image from "next/image";
import Link from "next/link";
import { images } from "../utils/images";

export function EpisodePreview({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link href={href}>
      <a className="flex items-center py-6 cursor-pointer bg-dark focus:brightness-110 hover:brightness-110 rounded-2xl">
        <div className="hidden w-40 h-40 md:visible">
          <Image
            src={images.dvadesetJedan}
            className="rounded-2xl"
            width={160}
            height={160}
            layout="fixed"
            alt=""
          />
        </div>
        <div className="ml-4 text-left xl:ml-6">
          <p className="text-xl font-semibold truncate md:text-xl">{title}</p>
          <p className="mt-2 text-lg font-medium md:text-sm text-gray">{description}</p>
        </div>
      </a>
    </Link>
  );
}
