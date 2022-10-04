import Image from "next/image";
import { MeetupPreview } from "./meetup-preview";
import events from "../content/events.json";
import { format } from "date-fns";
import { images } from "../utils/images";
import { GH_PAGES_SUBDIRECTORY } from "../utils/constants";

function getPastEvents() {
  return events
    .filter((event) => new Date(event.date) < new Date())
    .sort((a, z) => z.date.localeCompare(a.date));
}

export function MeetupsSection() {
  const pastEvents = getPastEvents();

  return (
    <section className="mt-14">
      <Image src={images.meetupCover} width={1024} height={512} layout="responsive" alt="" />
      <div className="w-5/6 m-auto">
        <p className="mb-16 font-medium text-center text-21 mt-14">
          We currently have over 100 members and meet up regularly. The meetups are very easy going
          where we discuss bitcoin and other subjects. Everyone is welcome! All you have to do is
          show up and be yourself.
        </p>
        <div className="flex justify-center w-full">
          <a
            href="https://www.meetup.com/dvadeset-jedan/events/"
            className="px-6 py-3 border rounded-full text-purple border-purple"
            target="_blank"
            rel="noreferrer"
          >
            Find our next meetup
          </a>
        </div>
      </div>
      <div className="px-12 mt-32 3xl:px-20">
        <h3 className="mb-14 text-[2.5rem] font-medium text-center">Recent Meetups</h3>
        <div className="justify-between grid grid-cols-1 gap-y-20 sm:gap-20 sm:grid-cols-2 md:grid-cols-3">
          {pastEvents.splice(0, 3).map((event) => (
            <MeetupPreview
              key={new Date(event.date).toString()}
              {...event}
              imgSrc={`${GH_PAGES_SUBDIRECTORY}/${event.imgSrc}`}
              date={format(new Date(event.date), "EEEE, MMMM dd, yyyy")}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center w-full mt-14">
        <a
          href="#"
          className="px-6 py-3 border rounded-full text-purple border-purple"
          target="_blank"
          rel="noreferrer"
        >
          All meetups
        </a>
      </div>
    </section>
  );
}
