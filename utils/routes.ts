const dev = process.env.NODE_ENV !== "production";
// Github pages sets the URL subdirectory as the repo name
// this is a lazy fix
// will be removed after we move to a custom domain
const prefix = dev ? "/" : "/dvadesetjedan.com/";

export const routes = {
  home: `${prefix}`,
  blog: `${prefix}blog`,
  community: `${prefix}community`,
  podcast: `${prefix}podcast`,
} as const;

export type Routes = keyof typeof routes;
