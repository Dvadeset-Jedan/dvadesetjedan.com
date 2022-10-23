import Image from "next/image";
import { BlogSection } from "../components/blog-section";
import { MeetupsSection } from "../components/meetups-section";
import { PodcastSection } from "../components/podcast-section";
import matter from "gray-matter";
import fs from "fs";
import { images } from "../utils/images";
import { InferGetStaticPropsType } from "next";
import { Frontmatter } from "../utils/types";
import eventsJSON from "../content/events.json";
import { fetchPodcastEpisodes } from "./podcast/podcast.api";

export default function Index({
  posts,
  events,
  episodes,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main className="bg-dark">
      <Image
        src={images.bitcoinIsland}
        width={1440}
        height={720}
        layout="responsive"
        priority
        alt=""
        objectFit="cover"
      />
      <div className="pb-16 lg:pb-20 w-[90%] lg:w-[85%] 2xl:w-[75%] mx-auto">
        <div className="flex justify-center">
          <div className="text-center">
            <h1 className="mt-10 text-3xl font-semibold md:text-6xl lg:mt-28">
              DvadesetJedan je balkanska bitcoin zajednica
            </h1>
            <p className="text-xl font-medium md:text-2xl mt-9">
              DvadesetJedan je neformalna grupa bitcoin entuzijasta sa ex-yu prostora koja za cilj
              ima edukaciju, podsticanje preduzetništva i širenje bitcoin mreže kroz različite
              projekte.
            </p>
          </div>
        </div>
        <MeetupsSection events={events} />
        <PodcastSection episodes={episodes} />
        <BlogSection title="Bitcoin Blog" posts={posts} />
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const res = await fetchPodcastEpisodes();
  const posts = fs.readdirSync("content/posts").map((fileName: string) => {
    const readFile = fs.readFileSync(`content/posts/${fileName}`, "utf-8");
    const { data: frontmatter, content } = matter(readFile);

    return {
      content,
      frontmatter: frontmatter as Frontmatter,
    };
  });

  return {
    props: {
      posts,
      episodes: res.items,
      events: eventsJSON,
    },
  };
}
