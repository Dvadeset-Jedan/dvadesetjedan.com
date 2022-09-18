import ExportedImage from "next-image-export-optimizer";

export function MeetupPreview({
  date,
  title,
  location,
  imgSrc,
  url,
}: {
  date: string;
  title: string;
  location: string;
  imgSrc: string;
  url: string;
}) {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <div className="flex items-center">
        <div style={{ width: 180, height: 180 }}>
          <ExportedImage
            src={imgSrc}
            width={180}
            height={180}
            layout="fixed"
            alt=""
            placeholder="blur"
          />
        </div>
        <div className="ml-12">
          <p className="font-medium text-purple">{date}</p>
          <p className="mt-2 text-2xl font-medium">{title}</p>
          <p className="mt-2 font-medium text-gray">{location}</p>
        </div>
      </div>
    </a>
  );
}
