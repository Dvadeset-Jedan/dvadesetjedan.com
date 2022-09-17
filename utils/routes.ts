const dev = process.env.NODE_ENV !== "production";

export const routes = {
  home: dev ? "/" : "/dvadesetjedan-web/",
  blog: dev ? "/blog" : "/dvadesetjedan-web/blog",
  community: dev ? "/community" : "/dvadesetjedan-web/community",
  podcast: dev ? "/podcast" : "/dvadesetjedan-web/podcast",
} as const;

export type Routes = keyof typeof routes;
