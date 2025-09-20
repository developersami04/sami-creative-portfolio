
import type { Project, TimelineEvent, Hobby, Collaborator, Profile } from "./types";

export const aboutData = {
    name: "Jane Doe",
    title: "Creative Developer",
    paragraphs: [
        "I am a passionate and creative developer with a knack for building beautiful and intuitive digital experiences. With a strong foundation in modern web technologies, I specialize in bringing ideas to life from concept to deployment.",
        "My journey in tech is driven by a constant curiosity and a desire to solve complex problems with elegant solutions. I thrive in collaborative environments and am always eager to learn and adapt to new challenges.",
    ]
};

export const workData: Project[] = [
  {
    id: 1,
    title: "Project Alpha",
    description: "A web application for real-time collaboration, built with a modern tech stack.",
    tags: ["React", "Node.js", "WebSockets"],
    imageId: "project-1",
  },
  {
    id: 2,
    title: "Project Beta",
    description: "An e-commerce platform with a focus on user experience and performance.",
    tags: ["Next.js", "TypeScript", "Stripe"],
    imageId: "project-2",
  },
  {
    id: 3,
    title: "Project Gamma",
    description: "A mobile-first social media app designed to connect local communities.",
    tags: ["React Native", "Firebase", "UX Design"],
    imageId: "project-3",
  },
  {
    id: 4,
    title: "Project Delta",
    description: "A data visualization dashboard for analyzing complex datasets.",
    tags: ["D3.js", "Python", "Flask"],
    imageId: "project-4",
  },
];

export const timelineData: TimelineEvent[] = [
  {
    date: "2022 - Present",
    title: "Senior Developer",
    company: "Innovate Inc.",
    description: "Leading the development of flagship products, mentoring junior developers, and driving architectural decisions to improve scalability and performance.",
    tags: ["React", "TypeScript", "Leadership"],
  },
  {
    date: "2020 - 2022",
    title: "Mid-Level Developer",
    company: "Tech Solutions Co.",
    description: "Developed and maintained key features for a large-scale enterprise application, focusing on front-end performance and user interface design.",
    tags: ["Vue.js", "Jest", "CI/CD"],
  },
  {
    date: "2018 - 2020",
    title: "Junior Developer",
    company: "Creative Agency",
    description: "Built responsive websites and landing pages for various clients, gaining foundational experience in web development and client communication.",
    tags: ["HTML", "CSS", "JavaScript", "jQuery"],
  },
  {
    date: "2014 - 2018",
    title: "B.S. in Computer Science",
    company: "University of Technology",
    description: "Graduated with honors, focusing on software engineering principles, data structures, and algorithms. Completed a thesis on machine learning applications.",
    tags: ["Academics", "Research"],
  },
];

export const studioInfo = {
    title: "Welcome to the Studio",
    description: "This is my creative playground. A space for experimentation, side projects, and exploring new technologies. Here, I blend code with creativity to build unique digital tools and experiences."
};

export const hobbiesData: Hobby[] = [
    {
        id: 1,
        title: "Hiking",
        description: "Exploring new trails and enjoying the serenity of nature. It's my favorite way to disconnect and recharge.",
        imageId: "hobby-hiking"
    },
    {
        id: 2,
        title: "Photography",
        description: "Capturing moments and landscapes. I love finding unique perspectives and telling stories through images.",
        imageId: "hobby-photography"
    },
    {
        id: 3,
        title: "Cooking",
        description: "Experimenting with new recipes and flavors. I find cooking to be a creative and rewarding process.",
        imageId: "hobby-cooking"
    },
];

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

export const profilesData: Profile[] = [
  {
    id: 1,
    name: "GitHub",
    url: "https://github.com",
    icon: "github",
  },
  {
    id: 2,
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: "linkedin",
  },
  {
    id: 3,
    name: "Twitter",
    url: "https://twitter.com",
    icon: "twitter",
  },
];
