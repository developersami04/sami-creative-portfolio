import type { Project } from "@/lib/types";

export const projectsPageData = {
  title: "My Projects",
  description: "Here is a collection of my work, demonstrating my skills in design and development.",
  heroImageUrl: "https://picsum.photos/seed/501/1200/600",
  heroImageHint: "coding workspace"
};

export const workSectionData = {
  title: "My Work",
  description: "A selection of projects that I'm proud of."
};

export const workData: Project[] = [
  {
    id: 1,
    title: "Project Alpha",
    description: "A web application for real-time collaboration, built with a modern tech stack.",
    tags: ["React", "Node.js", "WebSockets"],
    imageUrl: "https://picsum.photos/seed/101/600/400",
    imageHint: "abstract geometric",
    link: "#",
    year: "2023",
  },
  {
    id: 2,
    title: "Project Beta",
    description: "An e-commerce platform with a focus on user experience and performance.",
    tags: ["Next.js", "TypeScript", "Stripe"],
    imageUrl: "https://picsum.photos/seed/102/600/400",
    imageHint: "desk setup",
    link: "#",
    year: "2023",
  },
  {
    id: 3,
    title: "Project Gamma",
    description: "A mobile-first social media app designed to connect local communities.",
    tags: ["React Native", "Firebase", "UX Design"],
    imageUrl: "https://picsum.photos/seed/103/600/400",
    imageHint: "code screen",
    link: "#",
    year: "2022",
  },
  {
    id: 4,
    title: "Project Delta",
    description: "A data visualization dashboard for analyzing complex datasets.",
    tags: ["D3.js", "Python", "Flask"],
    imageUrl: "https://picsum.photos/seed/104/600/400",
    imageHint: "sketching ideas",
    link: "#",
    year: "2021",
  },
   {
    id: 5,
    title: "Project Epsilon",
    description: "A comprehensive design system for a suite of enterprise tools.",
    tags: ["Figma", "Storybook", "Design"],
    imageUrl: "https://picsum.photos/seed/105/600/400",
    imageHint: "ui components",
    link: "#",
    year: "2020",
  },
];
