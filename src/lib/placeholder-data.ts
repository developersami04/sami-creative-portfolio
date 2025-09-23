import type {
  Collaborator,
  Hobby,
  Profile,
  Project,
  Skill,
  Journey,
  StudioItem,
  HeroImage,
} from "@/lib/types";
import { Award, Briefcase, GraduationCap, Trophy, Cpu } from "lucide-react";

// Home Page Data
export const homePageData = {
  about: {
    sectionTitle: "About Me",
    name: "Sami",
    title: "AI/ML Student & Developer",
    bio: "Motivated B.Tech Computer Science student specialized in Artificial Intelligence and Machine Learning, passionate about developing intelligent applications.",
    paragraphs: [
      "Motivated B.Tech Computer Science student specialized in Artificial Intelligence and Machine Learning, passionate about developing intelligent applications, solving complex problems, and delivering innovative, efficient, and data driven solutions.",
      "Eager to develop technical expertise, learn continuously, and contribute meaningfully to a dynamic team environment in both development and project management.",
    ],
  },
};

// Profiles Data
export const profilesPageData = {
  title: "Find Me Online",
  description: "Connect with me on these platforms.",
};

export const profilesData: Profile[] = [
  {
    id: 1,
    name: "GitHub",
    url: "https://github.com/developersami04",
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
    url: "https://x.com/DevSami04",
    icon: "twitter",
  },
];

// Projects Page Data
export const projectsPageData = {
  title: "My Projects",
  description: "Here is a collection of my work, demonstrating my skills in design and development."
};

export const projectsSectionData = {
  title: "Academic Projects",
  description: "A selection of projects that I'm proud of."
};

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Apex-Sky – Projects Management",
    description: "A user-friendly web-application that allows users to manage projects, details, collaborations etc. in one platform and also using API they can fetch their projects from the platform to other sites as per their needs. (Still working)",
    tags: ["Python", "Django", "PostgreSQL", "HTML", "CSS", "Bootstrap"],
    category: "Full Stack",
    imageUrl: "https://picsum.photos/seed/101/600/400",
    imageHint: "project management dashboard",
    link: "#",
    year: "2025",
  },
  {
    id: 2,
    title: "AI-Based Animal Classifier",
    description: "Implements a deep learning-based classifier to distinguish between cats and dogs. Users can upload images for instant classification result.",
    tags: ["Deep Learning", "Python", "Streamlit"],
    category: "AI",
    imageUrl: "https://picsum.photos/seed/102/600/400",
    imageHint: "ai neural network",
    link: "#",
    year: "2025",
  },
  {
    id: 3,
    title: "To-Do-X – Task Management",
    description: "A user-friendly task scheduling web application, where user can create, complete, track task progress. So that they can always stay organized by accessing from anywhere using authentication.",
    tags: ["Python", "Django", "SQLite3", "HTML", "CSS", "Bootstrap"],
    category: "Web",
    imageUrl: "https://picsum.photos/seed/103/600/400",
    imageHint: "task list app",
    link: "#",
    year: "2025",
  },
];

// Collaborators Page Data
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

// Hobbies Page Data
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

// Journey Page Data
export const journeyPageData = {
  title: "My Professional Journey",
  description: "A timeline of my career, highlighting key roles, projects, and learning experiences that have shaped my skills and expertise.",
  timeline: {
      title: "Career Timeline",
      description: "Follow my path from education to my most recent professional achievements."
  }
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

// Skills Page Data
export const skillsPageData = {
  title: "My Skills",
  description: "A showcase of my technical skills and expertise in action.",
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
      type: "Language",
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
      type: "Language",
  },
  {
      id: 4,
      name: "SQL",
      proficiency: 80,
      description: "Writing complex queries and managing databases like PostgreSQL and MySQL.",
      type: "Language",
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
      type: "Database",
  },
  {
      id: 10,
      name: "MySQL",
      proficiency: 75,
      description: "Experience with MySQL for database management in web applications.",
      type: "Database",
  },
  {
      id: 11,
      name: "MongoDB",
      proficiency: 60,
      description: "Basic knowledge of NoSQL databases for flexible data storage.",
      type: "Database",
  },
  {
      id: 12,
      name: "JavaScript",
      proficiency: 30,
      description: "JavaScript is a versatile, high-level programming language primarily known for enabling interactive and dynamic content on web pages.",
      type: "Language",
  },
];

// Studio Page Data
export const studioPageData = {
  title: "Welcome to My Studio",
  description: "This is my creative playground. A space for photography, videography, and other artistic works. Here, I blend passion with skill to create unique digital experiences."
};

export const studioData: StudioItem[] = [
  {
      id: 1,
      title: "Mountain Majesty",
      description: "A breathtaking shot of a mountain range at sunrise, capturing the warm glow on the peaks.",
      category: "Photography",
      imageUrl: "https://picsum.photos/seed/1001/600/400",
      imageHint: "mountain sunrise"
  },
  {
      id: 2,
      title: "City Lights",
      description: "A dynamic short film showcasing the vibrant nightlife of a bustling city, set to an upbeat electronic track.",
      category: "Videography",
      imageUrl: "https://picsum.photos/seed/1002/600/400",
      imageHint: "city nightlife"
  },
  {
      id: 3,
      title: "Abstract Forms",
      description: "A digital painting exploring the interplay of color and shape, creating a sense of movement and energy.",
      category: "Creative Arts",
      imageUrl: "https://picsum.photos/seed/1003/600/400",
      imageHint: "abstract painting"
  },
  {
      id: 4,
      title: "Coastal Serenity",
      description: "The calm waves of the ocean gently washing over a sandy beach at dusk.",
      category: "Photography",
      imageUrl: "https://picsum.photos/seed/1004/600/400",
      imageHint: "beach sunset"
  },
  {
      id: 5,
      title: "Forest Walk",
      description: "A short, immersive video that takes you on a peaceful walk through a sun-dappled forest.",
      category: "Videography",
      imageUrl: "https://picsum.photos/seed/1005/600/400",
      imageHint: "forest path"
  },
  {
      id: 6,
      title: "Character Sketch",
      description: "A detailed digital sketch of a fantasy character, complete with intricate armor and a mysterious aura.",
      category: "Creative Arts",
      imageUrl: "https://picsum.photos/seed/1006/600/400",
      imageHint: "fantasy character"
  },
   {
      id: 7,
      title: "Urban Exploration",
      description: "Capturing the hidden beauty of city architecture through a unique lens.",
      category: "Photography",
      imageUrl: "https://picsum.photos/seed/1007/600/400",
      imageHint: "city architecture"
  },
  {
      id: 8,
      title: "Behind the Scenes",
      description: "A short documentary-style video showing the creative process behind a recent project.",
      category: "Videography",
      imageUrl: "https://picsum.photos/seed/1008/600/400",
      imageHint: "film making"
  },
  {
      id: 9,
      title: "Digital Dreamscape",
      description: "A surreal digital artwork blending elements of nature and technology.",
      category: "Creative Arts",
      imageUrl: "https://picsum.photos/seed/1009/600/400",
      imageHint: "surreal landscape"
  },
];
