import Link from "next/link";
import { urls } from "../utils/urls";
import { BarcodeFooterIcon } from "./icons/barcode-footer";
import { DiscordIcon } from "./icons/discord";
import { GithubIcon } from "./icons/github";
import { SpotifyIcon } from "./icons/spotify";
import { TelegramIcon } from "./icons/telegram";
import { YoutubeIcon } from "./icons/youtube";

export function Footer() {
  return (
    <footer className="flex flex-col justify-between pb-16 px-36 md:px-10 md:flex-row pt-11 bg-dark brightness-110">
      <div className="flex items-center">
        <span className="hidden lg:block">
          <BarcodeFooterIcon />
        </span>

        <ul className="flex justify-between w-full ml-0 text-sm lg:justify-start lg:w-auto lg:ml-8 text-gray">
          <li>Copyright © 2022</li>
          <li className="ml-4 lg:ml-6">Some link</li>
          <li className="ml-4 lg:ml-6">Terms of Service</li>
          <li className="ml-4 lg:ml-6">Privacy Policy</li>
        </ul>
      </div>
      <ul className="flex items-center mt-10 justify-evenly lg:justify-start md:mt-0">
        <li className="h-min">
          <Link href="https://youtube.com/">
            <a href={urls.discord} target="_blank" rel="noreferrer">
              <DiscordIcon />
            </a>
          </Link>
        </li>
        <li className="block ml-3 lg:ml-6 h-min">
          <Link href="https://youtube.com/">
            <a href={urls.youtube} target="_blank" rel="noreferrer">
              <YoutubeIcon />
            </a>
          </Link>
        </li>
        <li className="ml-3 lg:ml-6 h-min">
          <a href={urls.spotify} target="_blank" rel="noreferrer">
            <SpotifyIcon />
          </a>
        </li>
        <li className="ml-3 lg:ml-6 h-min">
          <a href={urls.github} target="_blank" rel="noreferrer">
            <GithubIcon />
          </a>
        </li>
        <li className="ml-3 lg:ml-6 h-min">
          <a href={urls.telegram} target="_blank" rel="noreferrer">
            <TelegramIcon />
          </a>
        </li>
      </ul>
    </footer>
  );
}
