export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  href?: string;
};

export type ProjectList = Project[];
