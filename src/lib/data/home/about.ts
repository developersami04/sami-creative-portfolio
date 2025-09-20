import type { HeroImage } from "@/lib/types";

export const aboutData = {
    sectionTitle: "About Me",
    name: "Sami",
    title: "AI/ML Student & Developer",
    bio: "Motivated B.Tech Computer Science student specialized in Artificial Intelligence and Machine Learning, passionate about developing intelligent applications.",
    paragraphs: [
        "Motivated B.Tech Computer Science student specialized in Artificial Intelligence and Machine Learning, passionate about developing intelligent applications, solving complex problems, and delivering innovative, efficient, and data driven solutions.",
        "Eager to develop technical expertise, learn continuously, and contribute meaningfully to a dynamic team environment in both development and project management.",
    ],
    profilePictureUrl: "https://picsum.photos/seed/701/500/500",
    profilePictureHint: "professional headshot",
    heroBackgrounds: [
        { imageUrl: "https://picsum.photos/seed/702/1920/1080", imageHint: "abstract tech background" },
        { imageUrl: "https://picsum.photos/seed/703/1920/1080", imageHint: "glowing data stream" },
        { imageUrl: "https://picsum.photos/seed/704/1920/1080", imageHint: "neural network visualization" },
        { imageUrl: "https://picsum.photos/seed/705/1920/1080", imageHint: "modern coding environment" },
    ] as HeroImage[],
};
