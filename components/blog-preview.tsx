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
        <Image src={images.blogPreview} width={497} height={314} layout="responsive" alt="" />
        <div className="absolute top-0 left-0 w-full h-full bg-[rgba(122,62,89,0.3)]" />
      </div>
      <div className="px-10 pt-12 pb-14 bg-dark brightness-110">
        <h1 className="text-[2rem] text-white font-medium">{title}</h1>
        <p className="mt-4 text-lg text-gray">
          Written by <span className="text-purple">{author}</span>, translated by{" "}
          <span className="text-purple">{translator}</span>
        </p>
        <div className="mx-auto mt-8 mb-8 text-lg text-gray">{meta}</div>
        <Link href={routes.blog(slug)}>
          <a className="text-lg leading-[1.875rem] text-purple">Continue...</a>
        </Link>
      </div>
    </div>
  );
}

export function SmallerBlogPreview({ title, author, translator }: BlogPreviewProps) {
  return (
    <div className="flex flex-col">
      <Image src={images.blogPreview} width={360} height={250} layout="responsive" alt="preview" />
      <div className="mt-6">
        <h1 className="font-medium text-21">{title}</h1>
        <p className="mt-4 text-sm text-gray">
          Written by <span className="text-purple">{author}</span>, translated by{" "}
          <span className="text-purple">{translator}</span>
        </p>
        <p className="mt-6 text-md text-gray">
          It can’t be said often enough: Bitcoin is confusing. However, it’s not complicated like a
          Rube Goldberg machine is complicated.
        </p>
        <button className="mt-4 text-sm text-purple">Continue...</button>
      </div>
    </div>
  );
}
