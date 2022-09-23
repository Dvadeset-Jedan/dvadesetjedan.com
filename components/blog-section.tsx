import classNames from "classnames";
import { Frontmatter } from "../utils/types";
import { BlogPreview } from "./blog-preview";
import { BarcodeSectionIcon } from "./icons/barcode-section";

type BlogSectionProps = {
  content: {
    content: string;
    frontmatter: Frontmatter;
  }[];
};

export function BlogSection({ content }: BlogSectionProps) {
  return (
    <section>
      <div className="flex items-center justify-between mt-48 mb-20">
        <h2 className="text-[3.5rem] font-medium">From the blog</h2>
        <BarcodeSectionIcon />
      </div>
      <div className="flex flex-col md:flex-row">
        {content?.map(({ frontmatter: { title, author, translator, meta, slug } }, i) => (
          <div
            className={classNames("md:w-1/2", {
              "md:mr-8": content.length !== i + 1,
              "mt-16 md:mt-0": content.length === i + 1,
            })}
            key={title}
          >
            <BlogPreview
              title={title}
              author={author}
              translator={translator}
              meta={meta}
              slug={slug}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
