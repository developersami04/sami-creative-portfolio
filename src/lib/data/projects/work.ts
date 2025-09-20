import type { Project } from "@/lib/types";

export const projectsPageData = {
  title: "My Projects",
  description: "Here is a collection of my work, demonstrating my skills in design and development.",
  heroImageId: "projects-hero"
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
    imageId: "project-1",
    link: "#",
  },
  {
    id: 2,
    title: "Project Beta",
    description: "An e-commerce platform with a focus on user experience and performance.",
    tags: ["Next.js", "TypeScript", "Stripe"],
    imageId: "project-2",
    link: "#",
  },
  {
    id: 3,
    title: "Project Gamma",
    description: "A mobile-first social media app designed to connect local communities.",
    tags: ["React Native", "Firebase", "UX Design"],
    imageId: "project-3",
    link: "#",
  },
  {
    id: 4,
    title: "Project Delta",
    description: "A data visualization dashboard for analyzing complex datasets.",
    tags: ["D3.js", "Python", "Flask"],
    imageId: "project-4",
    link: "#",
  },
   {
    id: 5,
    title: "Project Epsilon",
    description: "A comprehensive design system for a suite of enterprise tools.",
    tags: ["Figma", "Storybook", "Design"],
    imageId: "project-5",
    link: "#",
  },
];
