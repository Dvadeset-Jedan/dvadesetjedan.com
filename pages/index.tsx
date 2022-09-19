import Image from "next/image";
import { BlogSection } from "../components/blog-section";
import { MeetupsSection } from "../components/meetups-section";
import { PodcastSection } from "../components/podcast-section";
// import fs from "fs-extra";
// import matter from "gray-matter";
// import md from "markdown-it";

export default function Index({ content }: { content: string }) {
  return (
    <main className="bg-dark">
      <div className="max-w-full">
        <Image
          src="images/bitcoin-island.webp"
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
            <button className="px-16 py-6 mb-32 text-xl font-medium uppercase sm:mb-40 mt-14 bg-gradient-to-r from-purpleGradient to-lightOrangeGradient">
              join us
            </button>
          </div>
        </div>
        <MeetupsSection />
        <PodcastSection />
        <BlogSection />
        {/* <div className="mx-auto tracking-wide prose first-letter:text-4xl first-letter:tracking-wide text-21 text-gray"> */}
        {/*   <div dangerouslySetInnerHTML={{ __html: md().render(content) }} /> */}
        {/* </div> */}
      </div>
    </main>
  );
}

// export async function getStaticProps() {
//   const fileName = fs.readFileSync(`content/never-stop-learning.md`, "utf-8");
//   const { data: frontmatter, content } = matter(fileName);
//   return {
//     props: {
//       frontmatter,
//       content,
//     },
//   };
// }
