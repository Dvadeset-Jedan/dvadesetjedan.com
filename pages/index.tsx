import Image from "next/image";
import { BlogSection } from "../components/blog-section";
import { MeetupsSection } from "../components/meetups-section";
import { PodcastSection } from "../components/podcast-section";
import matter from "gray-matter";
import fs from "fs";
import { images } from "../utils/images";
import { InferGetStaticPropsType } from "next";
import { Frontmatter } from "../utils/types";
import episodesJSON from "../content/episodes.json";
import eventsJSON from "../content/events.json";

export default function Index({
  posts,
  episodes,
  events,
}: InferGetStaticPropsType<typeof getStaticProps>) {
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
      <div className="pb-16 lg:pb-20 w-[90%] lg:w-[85%] 2xl:w-2/3 mx-auto">
        <div className="flex justify-center">
          <div className="text-center">
            <h1 className="mt-16 font-semibold text-7xl md:text-6xl lg:mt-28">
              Where ideas thrive
            </h1>
            <p className="text-3xl font-medium md:text-2xl mt-9">
              DvadesetJedan is a local bitcoin community for Serbia, Croatia, Bosnia and Montenegro.
            </p>
          </div>
        </div>
        <MeetupsSection events={events} />
        <PodcastSection episodes={episodes} />
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
      frontmatter: frontmatter as Frontmatter,
    };
  });

  return {
    props: {
      posts,
      episodes: [...episodesJSON].sort((a, z) => a.createdUnixTimestamp - z.createdUnixTimestamp),
      events: eventsJSON,
    },
  };
}
