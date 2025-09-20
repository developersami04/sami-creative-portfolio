
import type { LucideIcon } from "lucide-react";

export type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  imageHint: string;
  link: string;
  year: string;
};

export type Hobby = {
  id: number;
  title:string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export type HeroImage = {
  imageUrl: string;
  imageHint: string;
};

export type Collaborator = {
  id: number;
  name: string;
  title: string;
  summary: string;
  imageUrl: string;
  imageHint: string;
};

export type Profile = {
  id: number;
  name: string;
  url: string;
  icon: "github" | "linkedin" | "twitter";
};

export type Skill = {
  id: number;
  name: string;
  proficiency: number;
  description: string;
  type: "Frontend" | "Backend" | "Design" | "Tools";
};

export type Journey = {
  id: number;
  date: string;
  title: string;
  company: string;
  description: string;
  icon: LucideIcon;
};

export type StudioItem = {
    id: number;
    title: string;
    description: string;
    category: "Photography" | "Videography" | "Creative Arts";
    imageUrl: string;
    imageHint: string;
};
