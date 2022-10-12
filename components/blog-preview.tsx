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

export function SmallerBlogPreview({ title, author, translator, slug, meta }: BlogPreviewProps) {
  return (
    <article className="flex flex-col">
      <div>
        <Image
          src={images.blogPreview}
          className="rounded-2xl"
          width="320"
          height="200"
          layout="responsive"
          alt=""
          priority
        />
      </div>
      <div className="mt-6">
        <h1 className="text-2xl font-medium md:text-2xl">{title}</h1>
        <p className="mt-4 text-lg md:text-md text-gray">
          Written by <span className="text-purple">{author}</span>, translated by{" "}
          <span className="text-purple">{translator}</span>
        </p>
        <p className="mt-6 mb-4 text-xl md:text-xl text-gray">{meta}</p>
        <Link href={routes.blogArticle(slug)}>
          <a className="text-lg md:text-sm text-purple">Continue...</a>
        </Link>
      </div>
    </article>
  );
}
