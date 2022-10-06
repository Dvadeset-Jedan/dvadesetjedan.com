import Image from "next/image";
import { LinkedinIcon } from "../../components/icons/linkedin";
import { TwitterIcon } from "../../components/icons/twitter";
import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import { GetStaticPaths, InferGetStaticPropsType } from "next";
import { images } from "../../utils/images";
import { useRouter } from "next/router";
import { Frontmatter } from "../../utils/types";
import { BlogSection } from "../../components/blog-section";
import copy from "copy-to-clipboard";

export default function Blog({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  const post = posts.find((post) => post.frontmatter?.slug === router.query.slug)!;

  const { title, author, translator } = post.frontmatter || {};

  return (
    <main className="pb-20 bg-dark">
      <div className="relative">
        <Image
          src={images.magicInternetMoney}
          width={1440}
          height={600}
          layout="responsive"
          unoptimized
          alt=""
          priority
        />
        <div className="absolute z-10 text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-5xl">{title}</h1>
          <p className="mt-2 text-2xl md:text-lg whitespace-nowrap">
            Written by <span className="text-purple">{author}</span>, translated by{" "}
            <span className="text-purple">{translator}</span>
          </p>
        </div>
      </div>
      <div className="relative mx-12 mt-16 text-4xl tracking-wide md:text-21 md:mx-36 lg:mx-56 xl:mx-72 2xl:mx-96 text-gray leading-[3.5rem] md:leading-9 first-letter:text-6xl first-letter:tracking-wide">
        <div dangerouslySetInnerHTML={{ __html: md().render(post.content) }} />

        <div className="top-0 left-0 flex mt-10 md:mt-0 md:flex-col md:items-end md:absolute xl:items-center xl:justify-end md:-right-28 lg:-right-40 xl:flex-row xl:-right-64 2xl:-right-80">
          <button
            className="px-3 text-sm font-medium border text-gray border-gray"
            onClick={() => copy(location.href)}
          >
            <span className="block md:hidden lg:block">Copy link</span>
            <span className="hidden md:block lg:hidden">©️</span>
          </button>
          <button className="border ml-2.5 md:mt-2 xl:mt-0 xl:ml-2.5 border-gray h-[2.375rem] w-[2.375rem] flex items-center justify-center">
            <TwitterIcon />
          </button>
          <button className="h-[2.375rem] ml-2.5 md:mt-2 xl:mt-0 xl:ml-2.5 w-[2.375rem] flex items-center justify-center border border-gray">
            <LinkedinIcon />
          </button>
        </div>
      </div>
      <div className="flex justify-center mx-10 md:mx-16">
        <BlogSection title="More from the blog" posts={posts} />
      </div>
    </main>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = fs.readdirSync("content/posts");
  return {
    paths: posts.map((t) => ({ params: { slug: t.replace(".md", "") } })),
    fallback: false,
  };
};

export async function getStaticProps() {
  const posts = fs.readdirSync("content/posts").map((fileName: string) => {
    const readFile = fs.readFileSync(`content/posts/${fileName}`, "utf-8");
    const { data: frontmatter, content } = matter(readFile);

    return {
      content,
      frontmatter: frontmatter as Frontmatter,
    };
  });

  return {
    props: { posts },
  };
}
