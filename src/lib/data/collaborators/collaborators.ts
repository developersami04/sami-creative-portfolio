import type { Collaborator, HeroImage } from "@/lib/types";

export const collaboratorsPageData = {
    title: "I Have Worked With ...",
    description: "A diverse team of passionate professionals with unique skills driving innovation and excellence in every project.",
    heroImages: [
        { imageUrl: "https://picsum.photos/seed/602/400/400", imageHint: "professional person" },
        { imageUrl: "https://picsum.photos/seed/603/400/400", imageHint: "creative office" },
        { imageUrl: "https://picsum.photos/seed/604/400/400", imageHint: "thoughtful person" },
        { imageUrl: "https://picsum.photos/seed/602/400/400", imageHint: "professional person" },
        { imageUrl: "https://picsum.photos/seed/603/400/400", imageHint: "creative office" },
    ] as HeroImage[],
    team: {
        title: "Team",
        description: "A diverse group of passionate professionals, each bringing unique skills and experiences to drive innovation and excellence in every project we undertake."
    }
};

export const collaboratorsData: Collaborator[] = [
    {
        id: 1,
        name: "Alex Johnson",
        title: "Project Manager",
        summary: "Dedicated to ensuring customer satisfaction and success, with a proactive approach to client support and retention.",
        imageUrl: "https://picsum.photos/seed/602/400/400",
        imageHint: "professional person"
    },
    {
        id: 2,
        name: "Samantha Lee",
        title: "Lead Designer",
        summary: "Operations specialist with a background in scaling startups, ensuring smooth and efficient company operations.",
        imageUrl: "https://picsum.photos/seed/603/400/400",
        imageHint: "creative office"
    },
    {
        id: 3,
        name: "Michael Chen",
        title: "CTO",
        summary: "Passionate product manager focused on delivering user-centric solutions that meet market needs.",
        imageUrl: "https://picsum.photos/seed/604/400/400",
        imageHint: "thoughtful person"
    },
     {
        id: 4,
        name: "James Wilson",
        title: "Lead Engineer",
        summary: "Technical guru with a passion for developing scalable and secure cloud-based applications.",
        imageUrl: "https://picsum.photos/seed/602/400/400",
        imageHint: "professional person"
    },
];
