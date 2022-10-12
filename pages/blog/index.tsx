import { SmallerBlogPreview } from "../../components/blog-preview";
import fs from "fs";
import matter from "gray-matter";
import { InferGetStaticPropsType } from "next";
import { Frontmatter } from "../../utils/types";

export default function Blog({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main className="bg-dark">
      <div className="flex w-[90%] flex-col items-center justify-center mx-auto py-20 text-center bg-dark brightness-110">
        <h1 className="text-3xl md:text-[2.5rem]">DvadesetJedan Blog</h1>
        <p className="mt-4 mt-6 text-lg md:text-lg text-gray">
          Original resources and translations of popular content from the Bitcoin community.
        </p>
        {/* <p className="mt-6 text-xl md:text-sm text-gray"> */}
        {/*   Get notified when we translate a new resource: */}
        {/* </p> */}
        {/* <div className="mt-6"> */}
        {/*   <input type="text" placeholder="Email" className="pl-6 py-4 bg-[#292A37] w-[480px]" /> */}
        {/*   <button className="px-8 py-4 ml-4 bg-gradient-to-r from-purpleGradient to-lightOrangeGradient"> */}
        {/*     Notify me */}
        {/*   </button> */}
        {/* </div> */}
      </div>
      <div className="w-[90%] mx-auto">
        <div className="py-20 grid grid-cols-1 sm:grid-cols-2 justify-items-center xl:grid-cols-3 gap-x-[1.875rem] gap-y-16">
          {posts.map(({ frontmatter }, index) => (
            <SmallerBlogPreview key={index} {...frontmatter} />
          ))}
        </div>
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
    props: { posts },
  };
}
