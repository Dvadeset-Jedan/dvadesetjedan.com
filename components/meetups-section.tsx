import ExportedImage from "next-image-export-optimizer";
import { MeetupPreview } from "./meetup-preview";
import events from "../content/events.json";
import { format } from "date-fns";

function getPastEvents() {
  return events
    .filter((event) => new Date(event.date) < new Date())
    .sort((a, z) => z.date.localeCompare(a.date));
}

function getNextEvent() {
  const futureEvents = events
    .filter((event) => new Date(event.date) > new Date())
    .sort((a, z) => a.date.localeCompare(z.date));
  return futureEvents[0];
}

export function MeetupsSection() {
  const pastEvents = getPastEvents();
  const nextEvent = getNextEvent();

  return (
    <section>
      <h2 className="text-[3.5rem] font-medium mb-14">Meetups</h2>
      <ExportedImage
        src="images/meetup-cover.png"
        width={1024}
        height={512}
        layout="responsive"
        placeholder="blur"
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
        {nextEvent && (
          <>
            <h3 className="text-[2rem] font-medium mb-8">Next meetup</h3>
            <MeetupPreview
              date={format(new Date(nextEvent.date), "EEEE, MMMM dd, yyyy")}
              title={nextEvent.title}
              location={nextEvent.location}
              imgSrc={nextEvent.imgSrc}
              url={nextEvent.url}
            />
          </>
        )}
        <h3 className="text-[2rem] font-medium mt-24 mb-8">Previous meetups</h3>
        {pastEvents
          .filter((_, i) => i < 3)
          .map((event) => (
            <div className="mb-8" key={new Date(event.date).toString()}>
              <MeetupPreview
                date={format(new Date(event.date), "EEEE, MMMM dd, yyyy")}
                title={event.title}
                location={event.location}
                imgSrc={event.imgSrc}
                url={event.url}
              />
            </div>
          ))}
      </div>
    </section>
  );
}
