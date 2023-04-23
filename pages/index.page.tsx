import { BlogSection } from "../components/blog-section";
import { MeetupsSection } from "../components/meetups-section";
import { PodcastSection } from "../components/podcast-section";
import matter from "gray-matter";
import fs from "fs";
import { InferGetStaticPropsType } from "next";
import { Frontmatter } from "../utils/types";
import eventsJSON from "../content/events.json";
import { Hero } from "../components/hero";
import { fetchPodcastEpisodes } from "./podcast/podcast.api";

export default function Index({
  posts,
  events,
  episodes,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main className="bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="pb-16 lg:pb-20 w-[90%] lg:w-[85%] 2xl:w-[75%] mx-auto">
          <div className="flex justify-center">
            <div className="text-center">
              <h1 className="mt-10 text-3xl font-semibold md:text-5xl lg:mt-20">
                Türkiye Bitcoin Topluluğu
              </h1>
              <p className="text-xl font-medium md:text-xl mt-9">
                Yirmibir, Türkiye'deki bitcoin meraklılarından oluşan gayri resmi bir grup olup, eğitim, girişimciliği teşvik etme ve farklı projelerle bitcoin ağını yayma amacını taşır.
              </p>
            </div>
          </div>
          <Hero />

          <PodcastSection episodes={episodes} />
          <BlogSection title="Bitcoin Blog" posts={posts} />
          <MeetupsSection events={events} />
        </div>
      </div>
    </main>
  );
}


export async function getStaticProps() {
  const episodes = await fetchPodcastEpisodes();
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
      posts: posts.sort((a, z) => z.frontmatter.index - a.frontmatter.index),
      events: eventsJSON,
      episodes: episodes.items || [],
    },
  };
}
