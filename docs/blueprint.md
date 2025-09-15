# **App Name**: PortfolioFlow

## Core Features:

- Centralized Data Management: Use local .ts files within /lib/data to manage portfolio content, including projects, journey milestones, and studio details.
- Homepage Showcase: Display an interactive showcase of selected projects, leveraging data from /lib/data/home/work.ts. Allow easy updates and reordering via the data files.
- Dynamic Journey Timeline: Generate an animated timeline of professional experience, pulling data from /lib/data/journey.
- Studio Section Display: Showcase studio-related content, with a customizable layout driven by data from /lib/data/studio.
- Mobile Responsiveness: Adapt the layout and components based on device size using the use-mobile.ts hook, to ensure a seamless experience on both desktop and mobile devices.
- AI-Powered Content Suggestions: Integrate a tool to provide content suggestions for project descriptions or personal bio sections. Use the LLM's reasoning ability to add richness and engagement to the portfolio.

## Style Guidelines:

- Primary color: Deep Indigo (#4B0082) to convey professionalism and creativity.
- Background color: Light Gray (#F0F0F0) for a clean and modern look.
- Accent color: Electric Purple (#BF00FF) to highlight interactive elements and CTAs.
- Body font: 'PT Sans', a versatile humanist sans-serif for readability.
- Headline font: 'Playfair', an elegant serif to create hierarchy and visual interest.
- Use a set of minimalist icons with rounded corners, in a stroke width matching the line thickness of the text, and colored to match the accent color.  Prefer feathericons.
- Maintain a clean, grid-based layout with generous whitespace to improve readability and visual appeal. Prioritize clear sections and hierarchy.
- Employ subtle transitions and animations to enhance user experience, such as smooth scrolling effects or hover animations on portfolio items.