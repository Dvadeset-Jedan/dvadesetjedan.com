import { SmallerBlogPreview } from "../../components/blog-preview";
import fs from "fs";
import matter from "gray-matter";
import { InferGetStaticPropsType } from "next";
import { Frontmatter } from "../../utils/types";
import { useRouter } from "next/router";
import { Flag, FlagType } from "../../components/flag";
import classNames from "classnames";

const languageOptions: { label: string; value: FlagType | "all" }[] = [
  { label: "Tüm çeviriler", value: "all" },
  { label: "Türkçe", value: "turkey" },
];


export default function Blog({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  const lang = router.query.lang as FlagType | "all";

  const filteredPosts = posts?.filter((post) => {
    if (!lang || lang === "all") {
      return true;
    }

    return post.frontmatter.flag === lang;
  });

  return (
    <main className="bg-dark">
      <div className="flex w-[90%] md:w-auto flex-col items-center justify-center mx-auto py-20 text-center bg-dark brightness-110">
        <h1 className="text-3xl font-semibold md:text-4xl">Yirmibir Blog</h1>
        <p className="mt-4 mt-6 text-lg md:text-lg text-gray">
          Blogumuz, Bitcoin hakkında öğrenmek için en iyi kaynaktır. Kendi oluşturduğumuz metinleri ve ekosistem genelindeki popüler içeriklerin çevirilerini okuyun.
        </p>
        <div className="relative">
          <select
            name="select"
            onChange={(event) => {
              router.push(
                {
                  query: { lang: event.target.value },
                },
                undefined,
                { shallow: true }
              );
            }}
            value={languageOptions.find((o) => o.value === lang)?.value}
            defaultValue="all"
            className={classNames(
              "px-5 pr-10 py-1 pb-1.5 text-md mt-4 rounded-full border border-purple bg-transparent cursor-pointer focus:outline-none text-purple relative z-10"
            )}
          >
            {languageOptions.map(({ value, label }) => {
              return (
                <option value={value} key={value}>
                  {value === "all" ? label : <Flag country={value as FlagType} />}
                </option>
              );
            })}
          </select>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 absolute top-1/2 right-3 text-purple"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="w-[90%] min-h-[30rem] mx-auto">
          <div className="py-20 grid grid-cols-1 sm:grid-cols-2 justify-items-center xl:grid-cols-3 gap-x-[1.875rem] gap-y-16">
            {filteredPosts.map(({ frontmatter }, index) => (
              <SmallerBlogPreview key={index} {...frontmatter} />
            ))}
          </div>
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
    props: { posts: posts?.sort((a, z) => z.frontmatter.index - a.frontmatter.index) },
  };
}
