import { Frontmatter } from "../utils/types";
import { useHasMounted } from "../utils/use-has-mounted";
import { SmallerBlogPreview } from "./blog-preview";

export function BlogSection({
  posts,
  title,
}: {
  posts: { content: string; frontmatter: Frontmatter }[];
  title: string;
}) {
  const { hasMounted } = useHasMounted();

  return (
    <section className="mt-32">
      <h2 className="text-3xl md:text-[2.5rem] mb-14 font-bold text-center">{title}</h2>
      <div className="grid grid-cols-1 gap-y-16 sm:gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
        {hasMounted &&
          posts
            .splice(0, 3)
            .map(({ frontmatter }, index) => <SmallerBlogPreview key={index} {...frontmatter} />)}
      </div>
    </section>
  );
}
