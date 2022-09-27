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
      <a className="flex items-center px-10 py-6 cursor-pointer bg-dark hover:brightness-110 rounded-2xl">
        <div className="w-32 h-32">
          <Image
            src={images.dvadesetJedan}
            className="rounded-2xl"
            width={128}
            height={128}
            layout="fixed"
            alt=""
          />
        </div>
        <div className="ml-4 text-left xl:ml-6">
          <p className="font-semibold text-21">{title}</p>
          <p className="mt-2 text-sm font-medium text-gray">{description}</p>
        </div>
      </a>
    </Link>
  );
}
