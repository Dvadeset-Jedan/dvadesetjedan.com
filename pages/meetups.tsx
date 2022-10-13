import { MeetupMap } from "../components/icons/meetup-map";
import { MouseEvent, useState } from "react";
import { useFloating } from "@floating-ui/react-dom";
import eventsJSON from "../content/events.json";
import { InferGetStaticPropsType } from "next";

function EventMapPin({ positionX, positionY }: { positionX: number; positionY: number }) {
  const { x, y, reference, floating, strategy } = useFloating({ placement: "top-start" });
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  return (
    <>
      <div
        className="absolute p-2 -mt-2 -ml-2 cursor-pointer"
        style={{ top: positionY, left: positionX }}
        ref={reference}
        onMouseEnter={() => setIsTooltipOpen(true)}
        onMouseLeave={() => setIsTooltipOpen(false)}
      >
        <div className="w-2 h-2 bg-[orange] rounded-full" />
      </div>
      {isTooltipOpen && (
        <div
          ref={floating}
          style={{ position: strategy, top: y ?? 0, left: x ?? 0 }}
          onMouseEnter={() => setIsTooltipOpen(true)}
          onMouseLeave={() => setIsTooltipOpen(false)}
        >
          <div className="flex flex-col p-4 border border-white/50 bg-dark">
            <p className="text-lg font-medium md:text-base text-purple">2022-02-12</p>
            <p className="mt-1 text-xl font-medium md:text-2xl">Dogma Brewery</p>
            <p className="mt-1 text-lg font-medium md:text-base text-gray">Belgrade</p>
            <p className="text-[12px] mt-1 text-gray">
              treba smisliti kako ce izgledati ovaj tooltip 🤔
            </p>
          </div>
        </div>
      )}
    </>
  );
}

function logPinPosition(event: MouseEvent<HTMLDivElement>) {
  const rect = event.currentTarget.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  console.log("📍", { x, y });
}

export default function Meetups({ events }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main className="bg-dark">
      <div className="w-[90%] mx-auto py-20">
        <h1 className="text-3xl font-semibold text-center md:text-4xl">Meetups</h1>
        <p className="mt-8 mb-20 text-center">
          Find a meetup near you. Everyone is welcome! All you have to do is show up and be
          yourself.
        </p>
        <div className="flex items-center justify-center h-full">
          <p className="mt-40 lg:hidden">Map is only available on larger screens 🫤</p>
          <div className="relative hidden lg:block" onClick={logPinPosition}>
            <MeetupMap />
            {events.map(({ positionX, positionY }) => {
              if (!positionX || !positionY) return null;

              return (
                <EventMapPin
                  key={`${positionX}-${positionY}`}
                  positionX={positionX}
                  positionY={positionY}
                />
              );
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
