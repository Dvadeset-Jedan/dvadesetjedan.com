import { BlogPreview, SmallerBlogPreview } from "../components/blog-preview";

export default function Community() {
  return (
    <main className="bg-dark">
      <div className="flex flex-col items-center justify-center py-20 text-center bg-dark brightness-110">
        <h1 className="text-[2.5rem]">DvadesetJedan Blog</h1>
        <p className="mt-4 mt-6 text-lg text-gray">
          Original resources and translations of popular content from the Bitcoin community.
        </p>
        <p className="mt-6 text-sm text-gray">Get notified when we translate a new resource:</p>
        <div className="mt-6">
          <input type="text" placeholder="Email" className="pl-6 py-4 bg-[#292A37] w-[480px]" />
          <button className="px-8 py-4 ml-4 bg-gradient-to-r from-purpleGradient to-lightOrangeGradient">
            Notify me
          </button>
        </div>
      </div>
      <div className="px-20 py-20 lg:px-32 xl:px-40 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-[1.875rem] gap-y-16">
        {[...new Array(9)].map((_, index) => (
          <SmallerBlogPreview
            key={index}
            title="Inaliable Property Rights"
            author="Dergigi"
            translator="Pavlenex"
          />
        ))}
      </div>
    </main>
  );
}
