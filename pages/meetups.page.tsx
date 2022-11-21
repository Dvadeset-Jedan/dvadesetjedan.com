import { MeetupMap } from "../components/icons/meetup-map";
import { MouseEvent, PropsWithChildren } from "react";
import eventsJSON from "../content/events.json";
import { InferGetStaticPropsType } from "next";
import { Serbia } from "../components/icons/serbia";
import { Croatia } from "../components/icons/croatia";
import { Montenegro } from "../components/icons/montenegro";
import { Bosnia } from "../components/icons/bosnia";
import { Slovenia } from "../components/icons/slovenia";
import { Macedonia } from "../components/icons/macedonia";
import classNames from "classnames";
import { PINS } from "../utils/pins";

function EventMapPin({
  url,
  position,
}: {
  url: string;
  position:
    | {
        city: string;
        mobilePosition: { x: number; y: number };
        desktopPosition: { x: number; y: number };
      }
    | undefined;
}) {
  return (
    <>
      <div
        className={classNames("hidden lg:block absolute -mt-2 -ml-2 cursor-pointer p-2")}
        style={{ top: position?.desktopPosition.y, left: position?.desktopPosition.x }}
      >
        <a href={url} target="_blank" rel="noreferrer">
          <div className="w-2 h-2 bg-[orange] rounded-full" />
        </a>
      </div>
      <div
        className={classNames("lg:hidden absolute -mt-2 -ml-2 cursor-pointer p-2")}
        style={{ top: position?.mobilePosition.y, left: position?.mobilePosition.x }}
      >
        <a href={url} target="_blank" rel="noreferrer">
          <div className="w-2 h-2 bg-[orange] rounded-full" />
        </a>
      </div>
    </>
  );
}

function MapSpacing({ children, sm }: PropsWithChildren<{ sm?: boolean }>) {
  return <div className={classNames("flex justify-center", sm ? "py-4" : "py-10")}>{children}</div>;
}

function logPinPosition(event: MouseEvent<HTMLDivElement>) {
  const rect = event.currentTarget.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  console.log("📍", { x, y });
}

export default function Meetups({ events }: InferGetStaticPropsType<typeof getStaticProps>) {
  const mostRecentFutureEventFromEachCity = Object.values(
    events.reduce((acc, event) => {
      if (new Date(event.date) > new Date()) {
        if (!acc[event.city]) {
          acc[event.city] = event;
        } else if (event.date < acc[event.city].date) {
          acc[event.city] = event;
        }
      }
      return acc;
    }, {} as Record<string, typeof events[0]>)
  );

  console.log({ mostRecentFutureEventFromEachCity });

  return (
    <main className="bg-dark">
      <div className="w-[90%] mx-auto py-20">
        <h1 className="text-3xl font-semibold text-center md:text-4xl">Sastanci</h1>
        <p className="mt-8 mb-20 text-center">
          Pronadji sastanak blizu tebe. Svi su dobrodosli. Vidimo se!
        </p>
        <div className="flex items-center justify-center h-full" onClick={logPinPosition}>
          <div className="relative flex flex-col lg:hidden">
            <Serbia />
            <Croatia />
            <MapSpacing sm>
              <Montenegro />
            </MapSpacing>
            <MapSpacing>
              <Bosnia />
            </MapSpacing>
            <MapSpacing>
              <Slovenia />
            </MapSpacing>
            <MapSpacing>
              <Macedonia />
            </MapSpacing>
            {mostRecentFutureEventFromEachCity.map(({ url, city }) => {
              const position = PINS.find((pin) => pin.city === city);

              return <EventMapPin url={url} key={position?.city} position={position} />;
            })}
          </div>
          <div className="relative hidden lg:block" onClick={logPinPosition}>
            <MeetupMap />
            {mostRecentFutureEventFromEachCity.map(({ url, city }) => {
              const position = PINS.find((pin) => pin.city === city);

              return <EventMapPin url={url} key={position?.city} position={position} />;
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

export async function getStaticProps() {
  return {
    props: {
      events: eventsJSON,
    },
  };
}
