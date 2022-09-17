import { BlogPreview } from "./blog-preview";
import { BarcodeSectionIcon } from "./icons/barcode-section";

export function BlogSection() {
  return (
    <section>
      <div className="flex items-center justify-between mt-48 mb-20">
        <h2 className="text-[3.5rem] font-medium">From the blog</h2>
        <BarcodeSectionIcon />
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="md:mr-8">
          <BlogPreview title="Inaliable Property Rights" author="Dergigi" translator="Pavlenex" />
        </div>
        <div className="mt-16 md:mt-0">
          <BlogPreview title="Inaliable Property Rights" author="Dergigi" translator="Pavlenex" />
        </div>
      </div>
    </section>
  );
}
