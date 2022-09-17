import ExportedImage from "next-image-export-optimizer";

export function EpisodePreview({ date, location }: { date: string; location: string }) {
  return (
    <div className="flex items-center">
      <ExportedImage src="images/meetup.png" width={180} height={180} layout="fixed" alt="" />
      <div className="ml-4 xl:ml-12">
        <p className="font-medium text-purple">{date}</p>
        <p className="mt-2 font-medium text-gray">{location}</p>
      </div>
    </div>
  );
}
