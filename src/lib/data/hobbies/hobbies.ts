import type { Hobby } from "@/lib/types";

export const hobbiesPageData = {
    title: "My Hobbies",
    description: "When I'm not coding, I enjoy a variety of activities that keep me creative and balanced.",
    heroImageUrl: "https://picsum.photos/seed/401/1200/600",
    heroImageHint: "hiking sunset",
    list: {
        title: "What I Do For Fun",
        description: "A glimpse into my passions outside of the digital world."
    }
};

export const hobbiesData: Hobby[] = [
    {
        id: 1,
        title: "Hiking",
        description: "Exploring new trails and enjoying the serenity of nature. It's my favorite way to disconnect and recharge.",
        imageUrl: "https://picsum.photos/seed/402/600/400",
        imageHint: "mountain range"
    },
    {
        id: 2,
        title: "Photography",
        description: "Capturing moments and landscapes. I love finding unique perspectives and telling stories through images.",
        imageUrl: "https://picsum.photos/seed/403/600/400",
        imageHint: "vintage camera"
    },
    {
        id: 3,
        title: "Cooking",
        description: "Experimenting with new recipes and flavors. I find cooking to be a creative and rewarding process.",
        imageUrl: "https://picsum.photos/seed/404/600/400",
        imageHint: "fresh vegetables"
    },
];
