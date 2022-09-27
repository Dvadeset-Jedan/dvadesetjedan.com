export const routes = {
  home: "/",
  blog: (slug: string) => `/blog/${slug}`,
  community: "/community",
  meetups: "/meetups",
  podcast: "/podcast",
  podcastEpisode: (slug: string) => `/podcast/${slug}`,
} as const;

export type RouteKeyType = keyof typeof routes;
export type RouteValueType = typeof routes[RouteKeyType];
