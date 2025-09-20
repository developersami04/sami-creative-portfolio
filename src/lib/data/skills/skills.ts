
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
        name: "Python",
        proficiency: 90,
        description: "Using Python for backend development, scripting, and implementing AI/ML models.",
        type: "Backend",
    },
    {
        id: 2,
        name: "Django",
        proficiency: 85,
        description: "Building robust and scalable web applications with the Django and Django Rest Framework.",
        type: "Backend",
    },
    {
        id: 3,
        name: "C",
        proficiency: 70,
        description: "Strong foundation in procedural programming and algorithms using C.",
        type: "Backend",
    },
    {
        id: 4,
        name: "SQL",
        proficiency: 80,
        description: "Writing complex queries and managing databases like PostgreSQL and MySQL.",
        type: "Backend",
    },
    {
        id: 5,
        name: "HTML & CSS",
        proficiency: 80,
        description: "Creating structured and well-styled web pages.",
        type: "Frontend",
    },
    {
        id: 6,
        name: "Bootstrap",
        proficiency: 75,
        description: "Rapidly developing responsive frontend layouts using Bootstrap.",
        type: "Frontend",
    },
    {
        id: 7,
        name: "Git & GitHub",
        proficiency: 85,
        description: "Using Git for version control and collaborating on projects via GitHub.",
        type: "Tools",
    },
    {
        id: 8,
        name: "Postman",
        proficiency: 88,
        description: "Testing and documenting APIs effectively with Postman.",
        type: "Tools",
    },
    {
        id: 9,
        name: "PostgreSQL",
        proficiency: 75,
        description: "Designing and managing relational databases with PostgreSQL.",
        type: "Backend",
    },
    {
        id: 10,
        name: "MySQL",
        proficiency: 75,
        description: "Experience with MySQL for database management in web applications.",
        type: "Backend",
    },
    {
        id: 11,
        name: "MongoDB",
        proficiency: 60,
        description: "Basic knowledge of NoSQL databases for flexible data storage.",
        type: "Backend",
    },
];
