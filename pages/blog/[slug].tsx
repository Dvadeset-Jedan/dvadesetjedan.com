import Image from "next/image";
import { BlogPreview } from "../../components/blog-preview";
import { LinkedinIcon } from "../../components/icons/linkedin";
import { TwitterIcon } from "../../components/icons/twitter";
import fs from "fs";
import matter from "gray-matter";
import { Frontmatter } from "../../utils/types";
import md from "markdown-it";
import { GetStaticPaths } from "next";

export default function Blog({
  content,
  frontmatter,
}: {
  content: string;
  frontmatter: Frontmatter;
}) {
  const { title, author, translator } = frontmatter || {};

  return (
    <main className="bg-dark">
      <div className="relative">
        <Image
          src="images/magic-internet-money.png"
          width={1440}
          height={600}
          layout="responsive"
          unoptimized
          alt=""
          priority
        />
        <div className="absolute z-10 text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-[56px] leading-[70px]">{title}</h1>
          <p className="mt-2 text-lg">
            Written by <span className="text-purple">{author}</span>, translated by{" "}
            <span className="text-purple">{translator}</span>
          </p>
        </div>
      </div>
      <div className="relative pb-20 mx-12 mt-16 tracking-wide text-21 md:mx-36 lg:mx-56 xl:mx-72 2xl:mx-96 text-gray leading-9 first-letter:text-4xl first-letter:tracking-wide">
        <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />

        <div className="top-0 left-0 flex mt-10 md:mt-0 md:flex-col md:items-end md:absolute xl:items-center xl:justify-end md:-right-28 lg:-right-40 xl:flex-row xl:-right-64 2xl:-right-80">
          <button className="px-3 text-sm font-medium border text-gray border-gray">
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
        <h2 className="mb-10 text-[2.5rem] font-medium text-white mt-11">You also might like</h2>
        <BlogPreview
          title="Inaliable Property Rights"
          author="Dergigi"
          translator="Pavlenex"
          meta="Technology is a marvelous thing. We are so quick to accept things as they stand, rarely
          taking the time to reflect on how magical these modern miracles are in actuality."
          slug="never-stop-learning"
        />
      </div>
    </main>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const translationsRaw = fs.readdirSync("content/translations");
  return {
    paths: translationsRaw.map((t) => ({ params: { slug: t.replace(".md", "") } })),
    fallback: "blocking",
  };
};

export async function getStaticProps({ params: { slug } }: { params: { slug: string } }) {
  const fileName = fs.readFileSync(`content/translations/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}
