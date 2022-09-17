const dev = process.env.NODE_ENV !== "production";

export const routes = {
  home: dev ? "/" : "/dvadesetjedan.com/",
  blog: dev ? "/blog" : "/dvadesetjedan.com/blog",
  community: dev ? "/community" : "/dvadesetjedan.com/community",
  podcast: dev ? "/podcast" : "/dvadesetjedan.com/podcast",
} as const;

export type Routes = keyof typeof routes;
