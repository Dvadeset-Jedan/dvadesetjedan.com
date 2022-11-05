import { Popover } from "@headlessui/react";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useEffect } from "react";
import { routes } from "../utils/routes";
import { BarcodeHeaderIcon } from "./icons/barcode-header";
import { BarsIcon } from "./icons/bars";
import { TextLogoIcon } from "./icons/text-logo";
import { XMarkIcon } from "./icons/x-mark";

function useLinks() {
  const router = useRouter();

  return [
    {
      name: "Početna",
      route: routes.home,
      active: router.asPath === routes.home,
    },
    {
      name: "Podcast",
      route: routes.podcast,
      active: router.asPath.includes(routes.podcast),
    },
    {
      name: "Sastanci",
      route: routes.meetups,
      active: router.asPath === routes.meetups,
    },
    {
      name: "Blog",
      route: routes.blog,
      active: router.asPath.includes(routes.blog),
    },
  ] as const;
}

export function Header({
  setDisableScroll,
}: {
  setDisableScroll: Dispatch<SetStateAction<boolean>>;
}) {
  const router = useRouter();
  const links = useLinks();

  return (
    <>
      <div className="relative flex items-center justify-between w-full px-4 md:px-0 py-8 md:flex-row md:py-14 bg-dark max-w-7xl mx-auto">
        <div className="flex items-center">
          <BarcodeHeaderIcon className="w-12 md:w-auto" />
          <Link href={routes.home}>
            <a className="ml-3">
              <span className="sr-only">DvadesetJedan</span>
              <TextLogoIcon className="w-52 md:w-auto" />
            </a>
          </Link>
        </div>

        <ul className="hidden mt-8 ml-8 md:flex md:mt-0">
          {links.map(({ name, route, active }, index) => (
            <li
              key={name}
              className={classNames("font-medium text-right text-19 ", {
                "mr-8 sm:mr-3 lg:mr-12 xl:mr-20": index !== links.length - 1,
              })}
            >
              <Link href={route}>
                <a
                  className={classNames("hover:text-purple", {
                    "text-purple": active,
                  })}
                >
                  {name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <div className="absolute top-0 left-0 w-full h-full md:hidden">
          <Popover className="relative z-10 flex justify-end w-full h-full">
            {({ open, close }) => (
              <>
                <DispatchPopoverState open={open} setDisableScroll={setDisableScroll} />
                <Popover.Button className="relative z-20 p-4 mt-3.5 mr-0.5 h-min">
                  {open ? <XMarkIcon /> : <BarsIcon />}
                </Popover.Button>

                <Popover.Panel className="absolute z-10 w-full h-screen bg-dark/90 backdrop-blur-md z-5">
                  <ul className="flex flex-col mt-28 h-[60%] justify-evenly">
                    {links.map(({ name, route, active }) => (
                      <li key={name} className="text-center">
                        <button
                          className={classNames("font-medium text-4xl hover:text-purple", {
                            "text-purple": active,
                          })}
                          onClick={() => {
                            router.push(route);
                            close();
                          }}
                        >
                          {name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </Popover.Panel>
              </>
            )}
          </Popover>
        </div>
      </div>
    </>
  );
}

function DispatchPopoverState({
  open,
  setDisableScroll,
}: {
  open: boolean;
  setDisableScroll: Dispatch<SetStateAction<boolean>>;
}) {
  useEffect(() => {
    setDisableScroll(open);
  }, [open, setDisableScroll]);

  return null;
}
