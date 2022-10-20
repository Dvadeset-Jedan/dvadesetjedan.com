import Image from "next/image";
import { MeetupPreview } from "./meetup-preview";
import { format } from "date-fns";
import { images } from "../utils/images";
import { GH_PAGES_SUBDIRECTORY } from "../utils/constants";
import { EventType } from "../utils/types";

function getPastEvents(events: EventType[]) {
  return events
    .filter((event) => new Date(event.date) < new Date())
    .sort((a, z) => z.date.localeCompare(a.date));
}

export function MeetupsSection({ events }: { events: EventType[] }) {
  const pastEvents = getPastEvents(events);

  return (
    <section className="mt-14">
      <Image src={images.meetupCover} width={1024} height={512} layout="responsive" alt="" />
      <div className="w-5/6 m-auto">
        <p className="mb-16 text-xl font-medium text-center md:text-2xl mt-14">
          Grupa trenuto ima na stotine članova i organizuje redovne sastanke širom regiona.
          Dobrodošli su svi, bez obzira na nivo znanja o bitcoin-u.
          Posebno volimo početnike, sa kojima ćemo vrlo rado podeliti znanje.
          Neki od nas rade u bitcoin industriji, neki su samo entuzijasti, neki imaju biznise koji su vezani za bitcoin.
        </p>
        <div className="flex justify-center w-full">
          <a
            href="https://www.meetup.com/dvadeset-jedan/events/"
            className="px-6 py-3 text-lg border rounded-full md:text-base text-purple border-purple"
            target="_blank"
            rel="noreferrer"
          >
            Pronađi naredni skup
          </a>
        </div>
      </div>
      <div className="px-4 mt-32 3xl:px-20">
        <h3 className="mb-14 text-3xl md:text-[2.5rem] font-bold text-center">Recent Meetups</h3>
        <div className="justify-between grid grid-cols-1 gap-y-10 sm:gap-20 sm:grid-cols-2 md:grid-cols-3">
          {[...pastEvents].splice(0, 3).map((event) => (
            <div key={new Date(event.date).toString()}>
              <MeetupPreview
                {...event}
                imgSrc={`${GH_PAGES_SUBDIRECTORY}/${event.imgSrc}`}
                date={format(new Date(event.date), "EEEE, MMMM dd, yyyy")}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center w-full mt-14">
        <a
          href="https://www.meetup.com/dvadeset-jedan/events/"
          className="px-6 py-3 text-lg border rounded-full md:text-base text-purple border-purple"
          target="_blank"
          rel="noreferrer"
        >
          Pregledaj događaje
        </a>
      </div>
    </section>
  );
}
