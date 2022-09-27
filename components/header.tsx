import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { routes } from "../utils/routes";
import { BarcodeHeaderIcon } from "./icons/barcode-header";
import { TextLogoIcon } from "./icons/text-logo";

export function Header() {
  const router = useRouter();

  return (
    <header className="flex flex-col items-center justify-between w-full px-8 py-8 sm:px-5 md:flex-row lg:px-12 md:py-14 bg-dark">
      <div className="flex items-center">
        <BarcodeHeaderIcon />
        <Link href={routes.home}>
          <a className="ml-3">
            <span className="sr-only">DvadesetJedan</span>
            <TextLogoIcon />
          </a>
        </Link>
      </div>
      <ul className="flex mt-8 ml-8 md:mt-0">
        <li className="mr-8 font-medium text-right sm:mr-3 text-19 lg:mr-12 xl:mr-20">
          <Link href={routes.home}>
            <a
              className={classNames("hover:text-purple", {
                "text-purple": router.asPath === routes.home,
              })}
            >
              Overview
            </a>
          </Link>
        </li>
        <li className="mr-8 font-medium text-right sm:mr-3 text-19 lg:mr-12 xl:mr-20">
          <Link href={routes.podcast}>
            <a
              className={classNames("hover:text-purple", {
                "text-purple": router.asPath.includes(routes.podcast),
              })}
            >
              Podcast
            </a>
          </Link>
        </li>
        <li className="mr-8 font-medium text-right sm:mr-3 text-19 lg:mr-12 xl:mr-20">
          <Link href="#">
            <a
              className={classNames("hover:text-purple", {
                "text-purple": router.asPath === routes.meetups,
              })}
            >
              Meetups
            </a>
          </Link>
        </li>
        <li className="font-medium text-right text-19">
          <Link href={routes.community}>
            <a
              className={classNames("hover:text-purple", {
                "text-purple": router.asPath.includes(routes.blog("")),
              })}
            >
              Blog
            </a>
          </Link>
        </li>
      </ul>
    </header>
  );
}
