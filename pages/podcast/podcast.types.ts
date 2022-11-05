export type Episode = {
  content: string;
  contentSnippet: string;
  description: string;
  creator: string;
  "dc:creator": string;
  enclosure: {
    url: string;
    length: string;
    type: string;
  };
  guid: string;
  isoDate: string;
  itunes: {
    duration: string;
    explicit: string;
    image: string;
    summary: string;
  };
  link: string;
  pubDate: string;
  title: string;
};

export type AnchorRSSReturnType = {
  items: Episode[];
};
