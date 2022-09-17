import ExportedImage from "next-image-export-optimizer";
import { MeetupPreview } from "./meetup-preview";

export function MeetupsSection() {
  return (
    <section>
      <h2 className="text-[3.5rem] font-medium mb-14">Meetups</h2>
      <ExportedImage
        src="images/meetup-cover.png"
        width={1024}
        height={512}
        layout="responsive"
        alt=""
      />
      <div className="w-5/6 m-auto">
        <p className="mt-16 text-2xl font-medium text-center">
          We currently have over 100 members and meet up regularly. The meetups are very easy going
          where we discuss bitcoin and other subjects. Everyone is welcome! All you have to do is
          show up and be yourself.
        </p>
      </div>
      <div className="mt-24 md:px-10 xl:px-28">
        <h3 className="text-[2rem] font-medium mb-8">Next meetup</h3>
        <MeetupPreview
          date="Monday, August 16, 2022"
          title='Cafe "Zona Industriale"'
          location="Njegoševa 49, Beograd 11000, Serbia"
        />
        <h3 className="text-[2rem] font-medium mt-24 mb-8">Previous meetups</h3>
        <div className="mb-8">
          <MeetupPreview
            date="Monday, August 16, 2022"
            title="Kavantura"
            location="Horvaćanska cesta 23a, 10000, Zagreb, Croatia"
          />
        </div>
        <div className="mb-8">
          <MeetupPreview
            date="Monday, July 4, 2022"
            title="Ovčice"
            location="Put Firula 4, 21000, Split, Croatia"
          />
        </div>
        <div className="mb-8">
          <MeetupPreview
            date="Monday, June 24, 2022"
            title="Caffe Caffe"
            location="Sveti Stefan, Montenegro"
          />
        </div>
      </div>
    </section>
  );
}
