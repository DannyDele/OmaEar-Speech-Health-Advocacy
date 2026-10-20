export type ExperienceItem = {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string | "Present";
  summary: string;
};

export type ExperienceList = ExperienceItem[];
