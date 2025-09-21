import type { Project, HeroImage } from "@/lib/types";

export const projectsPageData = {
  title: "My Projects",
  description: "Here is a collection of my work, demonstrating my skills in design and development.",
  heroImages: [
    { "imageUrl": "https://picsum.photos/seed/501/1200/600", "imageHint": "coding workspace" },
    { "imageUrl": "https://picsum.photos/seed/502/1200/600", "imageHint": "blueprint design" },
    { "imageUrl": "https://picsum.photos/seed/503/1200/600", "imageHint": "server room" },
    { "imageUrl": "https://picsum.photos/seed/504/1200/600", "imageHint": "tech diagram" },
    { "imageUrl": "https://picsum.photos/seed/505/1200/600", "imageHint": "glowing code" },
    { "imageUrl": "https://picsum.photos/seed/506/1200/600", "imageHint": "data analytics" },
    { "imageUrl": "https://picsum.photos/seed/507/1200/600", "imageHint": "abstract network" },
    { "imageUrl": "https://picsum.photos/seed/508/1200/600", "imageHint": "developer desk" },
    { "imageUrl": "https://picsum.photos/seed/509/1200/600", "imageHint": "cloud infrastructure" },
    { "imageUrl": "https://picsum.photos/seed/510/1200/600", "imageHint": "futuristic UI" }
  ] as HeroImage[]
};

export const workSectionData = {
  title: "Academic Projects",
  description: "A selection of projects that I'm proud of."
};

export const workData: Project[] = [
  {
    id: 1,
    title: "Apex-Sky – Projects Management",
    description: "A user-friendly web-application that allows users to manage projects, details, collaborations etc. in one platform and also using API they can fetch their projects from the platform to other sites as per their needs. (Still working)",
    tags: ["Python", "Django", "PostgreSQL", "HTML", "CSS", "Bootstrap"],
    imageUrl: "https://picsum.photos/seed/101/600/400",
    imageHint: "project management dashboard",
    link: "#",
    year: "2025",
  },
  {
    id: 2,
    title: "AI-Based Animal Classifier",
    description: "Implements a deep learning-based classifier to distinguish between cats and dogs. Users can upload images for instant classification result.",
    tags: ["Deep Learning", "Python", "Streamlit"],
    imageUrl: "https://picsum.photos/seed/102/600/400",
    imageHint: "ai neural network",
    link: "#",
    year: "2025",
  },
  {
    id: 3,
    title: "To-Do-X – Task Management",
    description: "A user-friendly task scheduling web application, where user can create, complete, track task progress. So that they can always stay organized by accessing from anywhere using authentication.",
    tags: ["Python", "Django", "SQLite3", "HTML", "CSS", "Bootstrap"],
    imageUrl: "https://picsum.photos/seed/103/600/400",
    imageHint: "task list app",
    link: "#",
    year: "2025",
  },
];
