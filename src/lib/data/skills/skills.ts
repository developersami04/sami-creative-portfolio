
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
        type: "Frontend",
    },
    {
        id: 2,
        name: "TypeScript",
        proficiency: 85,
        description: "Enhancing code quality and maintainability with static typing for large-scale applications.",
        type: "Frontend",
    },
    {
        id: 3,
        name: "Node.js",
        proficiency: 80,
        description: "Developing scalable server-side applications and APIs.",
        type: "Backend",
    },
    {
        id: 4,
        name: "Next.js",
        proficiency: 88,
        description: "Leveraging server-side rendering and static site generation for optimal performance.",
        type: "Frontend",
    },
    {
        id: 5,
        name: "UX Design",
        proficiency: 75,
        description: "Crafting intuitive and user-centered designs to create seamless user experiences.",
        type: "Design",
    },
    {
        id: 6,
        name: "Firebase",
        proficiency: 78,
        description: "Utilizing Firebase for real-time databases, authentication, and hosting.",
        type: "Backend",
    },
    {
        id: 7,
        name: "Figma",
        proficiency: 82,
        description: "Creating high-fidelity mockups, prototypes, and design systems.",
        type: "Design",
    },
    {
        id: 8,
        name: "Python",
        proficiency: 70,
        description: "Using Python for scripting, backend services, and data analysis.",
        type: "Backend",
    },
    {
        id: 9,
        name: "WebSockets",
        proficiency: 72,
        description: "Implementing real-time, bidirectional communication between clients and servers.",
        type: "Backend",
    },
    {
        id: 10,
        name: "Storybook",
        proficiency: 79,
        description: "Developing and documenting UI components in isolation for better reusability.",
        type: "Tools",
    },
    {
        id: 11,
        name: "D3.js",
        proficiency: 65,
        description: "Creating custom, interactive data visualizations for the web.",
        type: "Frontend",
    },
    {
        id: 12,
        name: "Stripe",
        proficiency: 68,
        description: "Integrating Stripe APIs for secure payment processing in web applications.",
        type: "Backend",
    },
];
