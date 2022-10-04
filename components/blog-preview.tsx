import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { images } from "../utils/images";
import { routes } from "../utils/routes";

interface BlogPreviewProps {
  title: string;
  author: string;
  translator: string;
  meta: string;
  slug: string;
}

export function BlogPreview({ title, author, translator, meta, slug }: BlogPreviewProps) {
  return (
    <div className="flex flex-col">
      <div className="relative">
        <Image
          src={images.blogPreview}
          className="rounded-2xl"
          width={497}
          height={314}
          layout="responsive"
          alt=""
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[rgba(122,62,89,0.3)]" />
      </div>
      <div className="px-10 pt-12 pb-14 bg-dark brightness-110">
        <h1 className="text-[2rem] text-white font-medium">{title}</h1>
        <p className="mt-4 text-lg text-gray">
          Written by <span className="text-purple">{author}</span>, translated by{" "}
          <span className="text-purple">{translator}</span>
        </p>
        <div className="mx-auto mt-8 mb-8 text-lg text-gray">{meta}</div>
        <Link href={routes.blogArticle(slug)}>
          <a className="text-lg leading-[1.875rem] text-purple">Continue...</a>
        </Link>
      </div>
    </div>
  );
}

export function SmallerBlogPreview({ title, author, translator, slug }: BlogPreviewProps) {
  return (
    <div className={"flex flex-col"}>
      <Image
        src={images.blogPreview}
        className="rounded-2xl"
        width="320"
        height="200"
        layout="responsive"
        alt=""
      />
      <div className="mt-6">
        <h1 className="text-3xl font-medium md:text-21">{title}</h1>
        <p className="mt-4 text-xl md:text-sm text-gray">
          Written by <span className="text-purple">{author}</span>, translated by{" "}
          <span className="text-purple">{translator}</span>
        </p>
        <p className="mt-6 mb-4 text-2xl md:text-md text-gray">
          It can’t be said often enough: Bitcoin is confusing. However, it’s not complicated like a
          Rube Goldberg machine is complicated.
        </p>
        <Link href={routes.blogArticle(slug)}>
          <a className="text-2xl md:text-sm text-purple">Continue...</a>
        </Link>
      </div>
    </div>
  );
}
