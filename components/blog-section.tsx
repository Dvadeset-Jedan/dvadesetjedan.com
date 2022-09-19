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
        {content.map((c, i) => (
          <div
            className={classNames("w-1/2", {
              "md:mr-8": content.length !== i + 1,
              "mt-16 md:mt-0": content.length === i + 1,
            })}
            key={c.frontmatter.title}
          >
            <BlogPreview
              title={c.frontmatter.title}
              author={c.frontmatter.author}
              translator={c.frontmatter.translator}
              meta={c.frontmatter.meta}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
