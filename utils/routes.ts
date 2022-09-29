export const routes = {
  home: "/",
  blog: "/blog",
  blogArticle: (slug: string) => `${routes.blog}/${slug}`,
  meetups: "/meetups",
  podcast: "/podcast",
  podcastEpisode: (slug: string) => `${routes.podcast}/${slug}`,
} as const;

export type RouteKeyType = keyof typeof routes;
export type RouteValueType = typeof routes[RouteKeyType];
