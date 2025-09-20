import type { Journey } from "@/lib/types";
import { Briefcase, GraduationCap, Star } from "lucide-react";

export const journeyPageData = {
    title: "My Professional Journey",
    description: "A timeline of my career, highlighting key roles, projects, and learning experiences that have shaped my skills and expertise.",
    heroImageUrl: "https://picsum.photos/seed/901/1200/600",
    heroImageHint: "winding road",
    timeline: {
        title: "Career Timeline",
        description: "Follow my path from education to my most recent professional achievements."
    }
};

export const journeyData: Journey[] = [
    {
        id: 1,
        date: "2015",
        title: "Graduated University",
        company: "University of Technology",
        description: "Completed my Bachelor's degree in Computer Science with a focus on web development and software engineering.",
        icon: GraduationCap,
    },
    {
        id: 2,
        date: "2016-2018",
        title: "Junior Developer",
        company: "Tech Solutions Inc.",
        description: "Started my professional career, contributing to various web projects and learning the fundamentals of teamwork and agile development.",
        icon: Briefcase,
    },
    {
        id: 3,
        date: "2018-2021",
        title: "Full Stack Developer",
        company: "Innovate Digital",
        description: "Took on more responsibility, leading the development of several key features and mentoring junior developers. Specialized in React and Node.js.",
        icon: Briefcase,
    },
    {
        id: 4,
        date: "2021-Present",
        title: "Senior Creative Developer",
        company: "Creative Minds Agency",
        description: "Leading frontend development and architectural decisions for high-impact client projects, focusing on performance, accessibility, and cutting-edge design.",
        icon: Briefcase,
    },
    {
        id: 5,
        date: "Today",
        title: "Continuing to Grow",
        company: "Always Learning",
        description: "I am constantly exploring new technologies, contributing to open-source projects, and seeking out new challenges to expand my skill set.",
        icon: Star,
    },
];
