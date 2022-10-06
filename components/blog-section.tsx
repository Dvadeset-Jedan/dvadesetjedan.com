import { useEffect, useState } from "react";
import { Frontmatter } from "../utils/types";
import { SmallerBlogPreview } from "./blog-preview";

export function BlogSection({
  posts,
  title,
}: {
  posts: { content: string; frontmatter: Frontmatter }[];
  title: string;
}) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => setHasMounted(true), []);

  if (!hasMounted) {
    return null;
  }

  return (
    <section className="mt-32">
      <h2 className="text-5xl md:text-[2.5rem] mb-14 font-bold text-center">{title}</h2>
      <div className="grid grid-cols-1 gap-y-20 sm:gap-x-20 sm:grid-cols-2 lg:grid-cols-3">
        {posts.splice(0, 3).map(({ frontmatter }, index) => (
          <SmallerBlogPreview key={index} {...frontmatter} />
        ))}
      </div>
    </section>
  );
}
