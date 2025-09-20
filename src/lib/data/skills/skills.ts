import type { Skill } from "@/lib/types";

export const skillsPageData = {
    title: "My Skills",
    description: "A showcase of my technical skills and expertise in action.",
    heroImageUrl: "https://picsum.photos/seed/801/1200/600",
    heroImageHint: "modern tech",
    list: {
        title: "Technical Proficiency",
        description: "Here's a breakdown of my skills, their proficiency, and where I've used them."
    }
};

export const skillsData: Skill[] = [
    {
        id: 1,
        name: "React",
        proficiency: 90,
        description: "Building dynamic and responsive user interfaces with a focus on component-based architecture.",
    },
    {
        id: 2,
        name: "TypeScript",
        proficiency: 85,
        description: "Enhancing code quality and maintainability with static typing for large-scale applications.",
    },
    {
        id: 3,
        name: "Node.js",
        proficiency: 80,
        description: "Developing scalable server-side applications and APIs.",
    },
    {
        id: 4,
        name: "Next.js",
        proficiency: 88,
        description: "Leveraging server-side rendering and static site generation for optimal performance.",
    },
    {
        id: 5,
        name: "UX Design",
        proficiency: 75,
        description: "Crafting intuitive and user-centered designs to create seamless user experiences.",
    },
    {
        id: 6,
        name: "Firebase",
        proficiency: 78,
        description: "Utilizing Firebase for real-time databases, authentication, and hosting.",
    },
];
