import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { images } from "../utils/images";
import { routes } from "../utils/routes";
import { Frontmatter } from "../utils/types";

export function SmallerBlogPreview({
  title,
  author,
  authorURL,
  translator,
  translatorURL,
  slug,
  meta,
  imgSrc,
}: Frontmatter) {
  const router = useRouter();

  return (
    <article className="flex flex-col">
      <div>
        <Image
          src={imgSrc || images.blogPreview}
          className="cursor-pointer rounded-2xl"
          width="320"
          height="200"
          layout="responsive"
          alt=""
          priority
          onClick={() => router.push(routes.blogArticle(slug))}
        />
      </div>
      <div className="mt-6">
        <h1
          className="text-2xl font-medium cursor-pointer md:text-2xl"
          onClick={() => router.push(routes.blogArticle(slug))}
        >
          {title}
        </h1>
        <p className="mt-4 text-lg md:text-md text-gray">
          Written by{" "}
          <a className="text-purple" href={authorURL}>
            {author}
          </a>
          , translated by{" "}
          <a className="text-purple" href={translatorURL}>
            {translator}
          </a>
        </p>
        <p className="mt-6 mb-4 text-xl md:text-xl text-gray">{meta}</p>
        <Link href={routes.blogArticle(slug)}>
          <a className="text-lg md:text-sm text-purple">Continue...</a>
        </Link>
      </div>
    </article>
  );
}
