import type { Collaborator } from "@/lib/types";

export const collaboratorsPageData = {
    title: "I Have Worked With ...",
    description: "A diverse team of passionate professionals with unique skills driving innovation and excellence in every project.",
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
        imageId: "collaborator-1"
    },
    {
        id: 2,
        name: "Samantha Lee",
        title: "Lead Designer",
        summary: "Operations specialist with a background in scaling startups, ensuring smooth and efficient company operations.",
        imageId: "collaborator-2"
    },
    {
        id: 3,
        name: "Michael Chen",
        title: "CTO",
        summary: "Passionate product manager focused on delivering user-centric solutions that meet market needs.",
        imageId: "collaborator-3"
    },
     {
        id: 4,
        name: "James Wilson",
        title: "Lead Engineer",
        summary: "Technical guru with a passion for developing scalable and secure cloud-based applications.",
        imageId: "collaborator-1"
    },
];
