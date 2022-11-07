import Link from "next/link";
import React from "react";
import { useState } from "react";
import { ActionLink } from "../../components/action-link";
import { EpisodePreview } from "../../components/episode-preview";
import { PodcastActions } from "../../components/podcast-actions";
import { routes } from "../../utils/routes";
import { usePodcastEpisodes } from "./podcast.api";

export function getSlug(link: string | undefined) {
  const CUT_OfF_PREFIX = "episodes/";
  const slug = link?.slice(link.indexOf(CUT_OfF_PREFIX) + CUT_OfF_PREFIX.length);
  return slug || "";
}

export default function Podcast() {
  const { episodes } = usePodcastEpisodes();
  const [showAllEpisodes, setShowAllEpisodes] = useState(false);

  const [lastEpisode, ...otherEpisodes] = episodes || [];
  const newerEpisodes = [...otherEpisodes].splice(0, 9);
  const olderEpisodes = [...otherEpisodes].splice(9);

  return (
    <main className="text-center bg-dark">
      <div className="py-16 bg-dark brightness-110">
        <div className="max-w-7xl mx-auto">
          <div className="m-auto w-[90%] xl:w-3/5">
            <h1 className="text-2xl font-semibold md:text-4xl">
              Dvadeset Jedan - Bitcoin Only Podcast
            </h1>
            <p className="mt-3 text-xl md:text-lg text-gray">{`${lastEpisode?.contentSnippet?.slice(
              0,
              300
            )}...`}</p>
            <PodcastActions title="Slušajte nas na" />
          </div>
          <div className="m-auto mt-20 w-[90%] mb-4">
            <iframe
              src={`https://anchor.fm/dvadesetjedan/embed/episodes/${getSlug(lastEpisode?.link)}`}
              scrolling="no"
              className="w-full h-[10.6rem]"
            />
          </div>
          <Link href={routes.podcastEpisode(getSlug(lastEpisode?.link))}>
            <a className="text-xl font-medium md:text-base text-purple">Detalji epizode</a>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="m-auto w-[90%] my-20">
          <h2 className="text-2xl md:text-[2.5rem] font-bold mb-14">Prethodne epizode</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 text-left">
            {newerEpisodes.map(({ link, title, contentSnippet }) => (
              <EpisodePreview
                key={getSlug(link)}
                title={title}
                description={`${contentSnippet.slice(0, 100)}...`}
                href={routes.podcastEpisode(getSlug(link))}
              />
            ))}
            {showAllEpisodes &&
              olderEpisodes.map(({ link, title, contentSnippet }) => (
                <EpisodePreview
                  key={getSlug(link)}
                  title={title}
                  description={`${contentSnippet.slice(0, 100)}...`}
                  href={routes.podcastEpisode(getSlug(link))}
                />
              ))}
          </div>
          {!showAllEpisodes && (
            <div className="flex justify-center w-full mt-16">
              <ActionLink as="button" onClick={() => setShowAllEpisodes(true)}>
                Sve epizode
              </ActionLink>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
