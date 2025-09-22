
# PortfolioFlow - Project Blueprint

This document outlines the architecture and current state of the PortfolioFlow application.

## 1. Core Concept

PortfolioFlow is a dynamic, modern personal portfolio website built with Next.js. It's designed to showcase a developer's projects, skills, professional journey, and creative work. The application is data-driven, pulling content from local TypeScript files, and features an interactive AI image generation tool to demonstrate AI/ML capabilities.

## 2. Tech Stack

- **Framework**: Next.js (App Router) with React
- **Language**: TypeScript
- **Styling**: Tailwind CSS with `tailwind-merge` and `clsx` for utility class management.
- **UI Components**: ShadCN UI for a consistent and accessible component library.
- **Animations**: Framer Motion for page transitions and scroll-based animations.
- **AI Integration**: Genkit for interacting with Google's Gemini models.
- **Icons**: `lucide-react` for a clean and consistent icon set.

## 3. Project Structure

```
/
├── src/
│   ├── app/                    # Next.js App Router: contains all pages and layouts
│   │   ├── (page-routes)/      # Folders for each page (e.g., /projects, /studio)
│   │   ├── globals.css         # Global styles and ShadCN theme variables
│   │   └── layout.tsx          # Root layout for the entire application
│   │
│   ├── components/             # Reusable React components
│   │   ├── shared/             # Components used across multiple pages (Header, Footer, etc.)
│   │   ├── ui/                 # ShadCN UI components
│   │   └── (feature-specific)/ # Components for specific pages (e.g., /home, /studio)
│   │
│   ├── ai/                     # Genkit AI functionality
│   │   ├── flows/              # Genkit flows (e.g., image generation)
│   │   └── genkit.ts           # Genkit initialization and configuration
│   │
│   ├── hooks/                  # Custom React hooks (e.g., use-scroll-animation)
│   │
│   ├── lib/                    # Library files, utilities, and data
│   │   ├── placeholder-data.ts # Centralized file for all static site content
│   │   ├── placeholder-images.json # Centralized file for all placeholder image URLs
│   │   ├── ai-generated-images.json # Stores metadata for AI-generated images
│   │   ├── types.ts            # TypeScript type definitions
│   │   └── utils.ts            # Utility functions (e.g., `cn` for classnames)
│
├── tailwind.config.ts        # Tailwind CSS configuration
├── next.config.ts            # Next.js configuration
└── package.json              # Project dependencies and scripts
```

## 4. Core Features

### 4.1. Data-Driven Content
- All text content, project details, skills, and journey milestones are managed in `src/lib/placeholder-data.ts`.
- All placeholder image URLs are managed in `src/lib/placeholder-images.json`.
- This separation of data and UI makes the portfolio easy to update without touching the component code.

### 4.2. Page Structure
- **Homepage (`/`)**: A comprehensive introduction featuring a hero section, an "About Me" summary, a showcase of recent projects, and links to social profiles.
- **Projects (`/projects`)**: A detailed, searchable gallery of all projects.
- **Skills (`/skills`)**: A categorized display of technical skills with proficiency ratings.
- **Journey (`/journey`)**: A vertical timeline of professional and educational milestones.
- **Collaborators (`/collaborators`)**: A page showcasing team members with a dynamic vertical marquee hero section.
- **Hobbies (`/hobbies`)**: A look into personal interests outside of work.
- **Studio (`/studio`)**: A creative gallery for photography, art, and AI-generated images.

### 4.3. AI-Powered Image Generation
- **Location**: Found on the Studio page (`/studio`).
- **Functionality**: Users can enter a text prompt to generate a unique image using Google's `gemini-2.5-flash-image-preview` model via Genkit.
- **Persistence**: The generated image's metadata (including the `data:image/...` URL) is saved to `src/lib/ai-generated-images.json`.
- **Display**: The `StudioGallery` component is updated in real-time (via a page refresh) to display newly created images alongside the static ones.

### 4.4. UI and UX
- **Responsive Design**: The application is fully responsive, with dedicated navigation for mobile (`BottomNav`) and desktop (`Header`).
- **Animations**: Subtle page transitions and on-scroll animations (`useScrollAnimation` hook) are used to enhance the user experience.
- **Theming**: A dark/light mode theme toggle is implemented using `next-themes`.
- **Dynamic Marquees**: The Collaborators page features a modern, vertically scrolling marquee in its hero section.

## 5. Style Guidelines

- **Fonts**: `PT Sans` for body text and `Playfair Display` for headlines.
- **Color Palette**: A professional and creative theme defined with CSS variables in `globals.css` for easy customization.
- **Layout**: Clean, grid-based layouts with generous whitespace.
- **Icons**: `lucide-react` is used for a consistent and minimalist icon style.
