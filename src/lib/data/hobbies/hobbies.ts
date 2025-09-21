import type { Hobby } from "@/lib/types";

export const hobbiesPageData = {
    title: "My Hobbies",
    description: "When I'm not coding, I enjoy a variety of activities that keep me creative and balanced.",
    list: {
        title: "What I Do For Fun",
        description: "A glimpse into my passions outside of the digital world."
    }
};

export const hobbiesData: Hobby[] = [
    {
        id: 1,
        title: "Explore New Technologies",
        description: "I'm always diving into new tech stacks, libraries, and frameworks to stay on the cutting edge.",
        imageUrl: "https://picsum.photos/seed/402/600/400",
        imageHint: "glowing circuit board"
    },
    {
        id: 2,
        title: "Watching Animes",
        description: "I enjoy the intricate storytelling and stunning visuals of anime as a way to unwind.",
        imageUrl: "https://picsum.photos/seed/403/600/400",
        imageHint: "anime character illustration"
    },
    {
        id: 3,
        title: "Nature Photography & Videography",
        description: "Capturing the beauty of nature through my camera lens is a passion that gets me outdoors.",
        imageUrl: "https://picsum.photos/seed/404/600/400",
        imageHint: "camera in nature"
    },
];
