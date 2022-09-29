import Image from "next/image";
import { BlogSection } from "../components/blog-section";
import { MeetupsSection } from "../components/meetups-section";
import { PodcastSection } from "../components/podcast-section";
import matter from "gray-matter";
import fs from "fs";
import { images } from "../utils/images";
import { InferGetStaticPropsType } from "next";

export type BlogProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function Index({ posts }: BlogProps) {
  return (
    <main className="bg-dark">
      <div className="max-w-screen">
        <Image
          src={images.bitcoinIsland}
          width={1440}
          height={720}
          layout="responsive"
          priority
          alt=""
          objectFit="cover"
        />
      </div>
      <div className="px-8 pb-16 sm:px-20 lg:pb-20 lg:px-52">
        <div className="flex justify-center">
          <div className="text-center">
            <h1 className="text-[3.75rem] lg:text-[5rem] leading-[6.25rem] mt-16 lg:mt-28">
              Where ideas thrive
            </h1>
            <p className="text-2xl font-medium mt-9">
              DvadesetJedan is a local bitcoin community for Serbia, Croatia, Bosnia and Montenegro.
            </p>
          </div>
        </div>
        <MeetupsSection />
        <PodcastSection />
        <BlogSection posts={posts} />
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const posts = fs.readdirSync("content/posts").map((fileName: string) => {
    const readFile = fs.readFileSync(`content/posts/${fileName}`, "utf-8");
    const { data: frontmatter, content } = matter(readFile);

    return {
      content,
      frontmatter,
    };
  });

  return {
    props: { posts },
  };
}
