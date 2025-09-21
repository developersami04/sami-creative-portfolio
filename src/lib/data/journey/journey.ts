import type { Journey, HeroImage } from "@/lib/types";
import { Award, Briefcase, GraduationCap, Trophy, Cpu } from "lucide-react";

export const journeyPageData = {
    title: "My Professional Journey",
    description: "A timeline of my career, highlighting key roles, projects, and learning experiences that have shaped my skills and expertise.",
    timeline: {
        title: "Career Timeline",
        description: "Follow my path from education to my most recent professional achievements."
    },
    heroImages: [
        { "imageUrl": "https://picsum.photos/seed/901/1200/600", "imageHint": "winding road" },
        { "imageUrl": "https://picsum.photos/seed/902/1200/600", "imageHint": "mountain path" },
        { "imageUrl": "https://picsum.photos/seed/903/1200/600", "imageHint": "old map" },
    ] as HeroImage[]
};

export const journeyData: Journey[] = [
    {
        id: 1,
        date: "2022-2026",
        title: "B.Tech in Computer Science (AI & ML)",
        company: "Brainware University, Kolkata",
        description: "Pursuing a specialized degree in Artificial Intelligence and Machine Learning, maintaining a CGPA of 8.93 out of 10.",
        icon: GraduationCap,
    },
    {
        id: 2,
        date: "Jan-Feb 2025",
        title: "Intel Industrial Training on AIML",
        company: "INTEL & Ed Gate Technology",
        description: "Completed a 10-day certified industrial training on AI/ML using Python.",
        icon: Cpu,
    },
    {
        id: 3,
        date: "Sept 2024",
        title: "Xiaomi Ode2Code 3.0 Participant",
        company: "Unstop Platform",
        description: "Participated in a virtual hackathon, honing problem-solving and coding skills.",
        icon: Briefcase,
    },
    {
        id: 4,
        date: "Sept 2024",
        title: "TATA Crucible Campus Quiz",
        company: "Unstop Platform",
        description: "Competed in a prestigious tech quiz, showcasing technical knowledge.",
        icon: Briefcase,
    },
    {
        id: 5,
        date: "May 2024",
        title: "Branio-Synergy Tech-Quiz Winner",
        company: "University Event",
        description: "Achieved first place among 21 teams and received an Excellence Award.",
        icon: Trophy,
    },
    {
        id: 6,
        date: "Aug 2024",
        title: "Workshop on Emerging-Trends",
        company: "University Workshop",
        description: "Attended a 5-day workshop to stay updated with the latest in technology.",
        icon: Award,
    },
];
