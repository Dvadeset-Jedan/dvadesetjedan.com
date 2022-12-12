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
import styles from "../../styles/blog.module.scss";
import { Flag } from "../../components/flag";
import { useState } from "react";
import React from "react";
import classNames from "classnames";
import Head from "next/head";

function getTwitterShareURL(title: string, slug: string) {
  return `https://twitter.com/intent/tweet?text=${title} https://dvadesetjedan.com/dvadesetjedan.com/blog/${slug}`;
}

function getLinkedinShareURL(slug: string) {
  return `https://www.linkedin.com/sharing/share-offsite/?url=https://dvadesetjedan.com/blog/${slug}`;
}

function CopyURLButton() {
  const [copied, setCopied] = useState(false);

  React.useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => setCopied(false), 3500);
      return () => clearTimeout(timeout);
    }
  }, [copied]);

  return (
    <button
      className="px-3 flex items-center text-sm h-[2rem] font-medium border text-gray border-gray/40 hover:border-purple/40 hover:text-purple"
      onClick={() => {
        setCopied(true);
        copy(location.href);
      }}
    >
      {copied ? "Kopirano 🙌" : "Kopiraj URL"}
    </button>
  );
}

export default function Blog({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  const post = posts.find((post) => post.frontmatter?.slug === router.query.slug)!;

  const otherPosts = posts.filter((p) => p.frontmatter?.slug !== router.query.slug).splice(0, 3);

  const { title, author, translator, slug, authorURL, translatorURL, flag, img } =
    post?.frontmatter || {};

  return (
    <>
      <Head>
        {/* Facebook meta tags */}
        <meta property="og:url" content={`https://dvadesetjedan.com/blog/${slug}`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="DvadesetJedan" />
        <meta
          property="og:description"
          content="DvadesetJedan je neformalna grupa bitcoin entuzijasta sa ex-yu prostora koja za cilj ima edukaciju, podsticanje preduzetništva i širenje bitcoin mreže kroz različite projekte."
        />
        <meta
          property="og:image"
          content={`https://dvadesetjedan.com${images[img as keyof typeof images]}`}
        />
        {/* Facebook meta tags */}

        {/* Twitter meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="dvadesetjedan.com" />
        <meta property="twitter:url" content={`https://dvadesetjedan.com/blog/${slug}`} />
        <meta name="twitter:title" content="DvadesetJedan" />
        <meta
          name="twitter:description"
          content="DvadesetJedan je neformalna grupa bitcoin entuzijasta sa ex-yu prostora koja za cilj ima edukaciju, podsticanje preduzetništva i širenje bitcoin mreže kroz različite projekte."
        />
        <meta
          name="twitter:image"
          content={`https://dvadesetjedan.com${images[img as keyof typeof images]}`}
        />
        {/* Twitter meta tags */}
      </Head>

      <main className="pb-20 bg-dark">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            {img && (
              <>
                <div className="w-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={images[img as keyof typeof images]}
                    alt=""
                    className="absolute top-0 left-0 w-full h-full blur-sm brightness-[20%]"
                  />
                </div>
                <div className="h-[400px] sm:h-[600px] flex justify-center brightness-[30%]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={images[img as keyof typeof images]} alt="" className="h-full" />
                </div>
              </>
            )}
            {!img && (
              <Image
                src={images.magicInternetMoney}
                width={1440}
                height={600}
                layout="responsive"
                unoptimized
                alt=""
                priority
              />
            )}

            <div className="absolute z-5 text-center w-[80%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h1 className="text-[1.75rem] md:text-4xl xl:text-5xl">{title}</h1>
              <p className="mt-2 text-sm md:text-lg">
                Autor{" "}
                <a className="text-purple" href={authorURL}>
                  {author}
                </a>
                , Prevod{" "}
                <a className="mr-1 text-purple" href={translatorURL}>
                  {translator}
                </a>
                <Flag country={flag} />
              </p>
            </div>
          </div>

          <div className="relative md:w-auto mx-6 sm:mx-10 prose md:mx-20 mt-16 text-xl tracking-wide md:text-21 text-gray leading-8 md:leading-9 first-letter:text-3xl first-letter:tracking-wide">
            {post?.content && (
              <div
                dangerouslySetInnerHTML={{ __html: md().render(post.content) }}
                suppressHydrationWarning
                className={classNames(styles.markdown, "prose mx-auto")}
              />
            )}
            <div className="flex mt-14 justify-end">
              {" "}
              <CopyURLButton />
              <a
                href={getTwitterShareURL(title, slug)}
                className="border ml-2.5 border-gray/40 h-[2rem] w-[2rem] flex items-center justify-center hover:border-purple/40 group"
              >
                <TwitterIcon className="text-gray group-hover:text-purple" />
              </a>
              <a
                href={getLinkedinShareURL(slug)}
                className="h-[2rem] ml-2.5 w-[2rem] flex items-center justify-center border border-gray/40 hover:border-purple/40 group"
              >
                <LinkedinIcon className="text-gray group-hover:text-purple" />
              </a>
            </div>
          </div>

          <div className="flex justify-center mx-10 md:mx-16">
            <BlogSection title="Još sa bloga" posts={otherPosts} />
          </div>
        </div>
      </main>
    </>
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
