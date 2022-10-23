import { MeetupMap } from "../components/icons/meetup-map";
import { MouseEvent, PropsWithChildren, useState } from "react";
import { useFloating } from "@floating-ui/react-dom";
import eventsJSON from "../content/events.json";
import { InferGetStaticPropsType } from "next";
import { Serbia } from "../components/icons/serbia";
import { Croatia } from "../components/icons/croatia";
import { Montenegro } from "../components/icons/montenegro";
import { Bosnia } from "../components/icons/bosnia";
import { Slovenia } from "../components/icons/slovenia";
import { Macedonia } from "../components/icons/macedonia";
import classNames from "classnames";

function EventMapPin({ positionX, positionY }: { positionX: number; positionY: number }) {
  const { x, y, reference, floating, strategy } = useFloating({ placement: "top-start" });
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  return (
    <>
      <div
        className={classNames(
          "absolute -mt-2 -ml-2 cursor-pointer",
          isTooltipOpen ? "p-4 pr-12" : "p-2"
        )}
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
  return (
    <main className="bg-dark">
      <div className="w-[90%] mx-auto py-20">
        <h1 className="text-3xl font-semibold text-center md:text-4xl">Sastanci</h1>
        <p className="mt-8 mb-20 text-center">
          Pronadji sastanak blizu tebe. Svi su dobrodosli. Vidimo se!
        </p>
        <div className="flex items-center justify-center h-full">
          <p className="flex flex-col lg:hidden">
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
          </p>
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
