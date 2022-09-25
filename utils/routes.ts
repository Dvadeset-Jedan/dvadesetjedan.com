export const routes = {
  home: "/",
  blog: (slug: string) => `/blog/${slug}`,
  community: "/community",
  podcast: "/podcast",
} as const;

export type Routes = keyof typeof routes;
