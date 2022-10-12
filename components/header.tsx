import { Popover } from "@headlessui/react";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { routes } from "../utils/routes";
import { BarcodeHeaderIcon } from "./icons/barcode-header";
import { BarsIcon } from "./icons/bars";
import { TextLogoIcon } from "./icons/text-logo";
import { XMarkIcon } from "./icons/x-mark";

function useLinks() {
  const router = useRouter();

  return [
    {
      name: "Overview",
      route: routes.home,
      active: router.asPath === routes.home,
    },
    {
      name: "Podcast",
      route: routes.podcast,
      active: router.asPath.includes(routes.podcast),
    },
    {
      name: "Meetups",
      route: routes.meetups,
      active: router.asPath === routes.meetups,
    },
    {
      name: "Blog",
      route: routes.blog,
      active: router.asPath === routes.meetups,
    },
  ] as const;
}

export function Header() {
  const router = useRouter();
  const links = useLinks();

  return (
    <>
      <div className="relative flex items-center justify-between w-full px-4 py-8 sm:px-5 md:flex-row lg:px-12 md:py-14 bg-dark">
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
          {links.map(({ name, route, active }) => (
            <li
              key={name}
              className="mr-8 font-medium text-right sm:mr-3 text-19 lg:mr-12 xl:mr-20"
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
                <Popover.Button className="relative z-10 p-4 mt-3.5 mr-0.5 h-min">
                  {open ? <XMarkIcon /> : <BarsIcon />}
                </Popover.Button>

                <Popover.Panel className="absolute w-full h-screen bg-dark/90 backdrop-blur-md z-5">
                  <ul className="flex flex-col mt-28">
                    {links.map(({ name, route, active }) => (
                      <li key={name} className="mt-10 text-center">
                        <button
                          className={classNames("font-medium text-5xl hover:text-purple", {
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
