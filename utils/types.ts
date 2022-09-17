export interface Episode {
  block: any;
  category: string;
  categoryName: string;
  title: string;
  titlePlain: string;
  description: string;
  content: string;
  duration: number;
  slug: string;
  image: string;
  guid: string;
  date: string;
  enclosure: {
    url: string;
    length: string;
    type: string;
  };
  participants: string[];
}
