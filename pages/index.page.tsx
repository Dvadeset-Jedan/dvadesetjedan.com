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
      <!-- <Image
        src={images.bitcoinIsland}
        width={1440}
        height={720}
        layout="responsive"
        priority
        alt=""
        objectFit="cover"
      /> -->
      <div className="pb-16 lg:pb-20 w-[90%] lg:w-[85%] 2xl:w-[75%] mx-auto">
        <div className="flex justify-center">
          <div className="text-center">
            <h1 className="mt-10 text-3xl font-semibold md:text-6xl lg:mt-28">
              DvadesetJedan<br>
			  Balkanski Bitcoineri
            </h1>
            <p className="text-xl font-medium md:text-2xl mt-9">
              Bitcoin je revolucionaran. Stvoren je da bi promijenio svijet. Živimo u vremenu transformacije.<br>
			  DvadesetJedan je grupa otvorena svim Bitcoinerima.
            </p>
			<p className="text-xl font-medium md:text-2xl mt-9">
			Što DvadesetJedan radi i koji su nam ciljevi?<br>
			• Obrazovanje o Bitcoinu, kroz originalne i prevedene materijale<br>
			• Poticanje i podrška lokalnog Bitcoin poduzetništva<br>
			• Projekti usmjereni ka širenju Bitcoin mreže na svim razinama
			</p>
			<p className="text-xl font-medium md:text-2xl mt-9">
			Kako nam se možeš pridružiti? Nekoliko je načina:<br>
			• Uživo, na <a href="https://dvadeset-jedan.github.io/dvadesetjedan.com/meetups">jednom od druženja</a><br>
			• <a href="https://t.me/dvadesetjedan21">Telegram</a> i <a href="https://discord.gg/D7ekwFFnDH">Discord</a><br>
			• Ili prvo baci pogled na naš <a href="https://dvadeset-jedan.github.io/dvadesetjedan.com/podcast">podcast</a> i <a href="https://dvadeset-jedan.github.io/dvadesetjedan.com/blog">blog</a>
			</p>
			<p className="text-xl font-medium md:text-2xl mt-9">
              Bitcoin je revolucionaran. I ovo je tek početak.
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
