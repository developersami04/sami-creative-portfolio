import type { TimelineEvent } from "@/lib/types";

export const journeyPageData = {
  title: "My Journey",
  description: "A chronicle of my career, growth, and the key milestones that have shaped my professional life.",
  heroImageUrl: "https://picsum.photos/seed/301/1200/600",
  heroImageHint: "winding road"
};

export const timelineData: TimelineEvent[] = [
  {
    id: 1,
    date: "2022 - Present",
    title: "Senior Developer",
    company: "Innovate Inc.",
    description: "Leading the development of flagship products, mentoring junior developers, and driving architectural decisions to improve scalability and performance.",
    tags: ["React", "TypeScript", "Leadership"],
  },
  {
    id: 2,
    date: "2020 - 2022",
    title: "Mid-Level Developer",
    company: "Tech Solutions Co.",
    description: "Developed and maintained key features for a large-scale enterprise application, focusing on front-end performance and user interface design.",
    tags: ["Vue.js", "Jest", "CI/CD"],
  },
  {
    id: 3,
    date: "2018 - 2020",
    title: "Junior Developer",
    company: "Creative Agency",
    description: "Built responsive websites and landing pages for various clients, gaining foundational experience in web development and client communication.",
    tags: ["HTML", "CSS", "JavaScript", "jQuery"],
  },
  {
    id: 4,
    date: "2014 - 2018",
    title: "B.S. in Computer Science",
    company: "University of Technology",
    description: "Graduated with honors, focusing on software engineering principles, data structures, and algorithms. Completed a thesis on machine learning applications.",
    tags: ["Academics", "Research"],
  },
];
