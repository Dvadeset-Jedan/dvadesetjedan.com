import classNames from "classnames";
import { ReactNode, useState } from "react";
import { usePodcastEpisodes } from "../pages/podcast/podcast.api";
import { Footer } from "./footer";
import { Header } from "./header";

export function Layout({ children }: { children: ReactNode }) {
  const [disableScroll, setDisableScroll] = useState(false);

  // Prefetch podcast episodes
  usePodcastEpisodes();

  return (
    <div
      className={classNames("relative flex flex-col w-full h-full", {
        "overflow-hidden": disableScroll,
      })}
    >
      <Header setDisableScroll={setDisableScroll} />
      {children}
      <Footer />
    </div>
  );
}
