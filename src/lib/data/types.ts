export type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageId: string;
};

export type TimelineEvent = {
  date: string;
  title: string;
  company: string;
  description: string;
  tags?: string[];
};

export type Hobby = {
  id: number;
  title: string;
  description: string;
  imageId: string;
};
