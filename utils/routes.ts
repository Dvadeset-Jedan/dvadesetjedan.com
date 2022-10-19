export type ArticleSlug =
  | "never-stop-learning"
  | "dear-family-dear-friends"
  | "latin-american-bitcoin-perspective";

export const routes = {
  home: "/",
  blog: "/blog",
  blogArticle: (slug: ArticleSlug) => `${routes.blog}/${slug}`,
  meetups: "/meetups",
  podcast: "/podcast",
  podcastEpisode: (slug: string) => `${routes.podcast}/${slug}`,
} as const;

export type RouteKeyType = keyof typeof routes;
export type RouteValueType = typeof routes[RouteKeyType];
