// src/data/projects.ts

export type Project = {
  slug: string;
  title: string;
  year?: string;
  role?: string;
  blurb: string;
  imageSrc: string;
  imageAlt: string;
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "search",
    title: "Reimagining the AI Search Results UX",
    year: "2025",
    role: "Personal Project",
    blurb:
      "Using AI tools to rethink how to make the AI generated summary in Glean's search results page can better help employees make informed decisions",
    imageSrc: "/images/projects/ai-search-redesign.jpg",
    imageAlt: "AI search results page redesign",
  },
  {
    slug: "rankings",
    title: "Coinbase Rankings Leaderboard",
    year: "2024",
    role: "Product Management",
    blurb:
      "Leading the team to build a self-serve rankings leaderboard for Coinbase International Exchange's institutional market makers.",
    imageSrc: "/images/projects/coinbase-rankings.jpg",
    imageAlt: "Self-serve rankings dashboard",
  },
  {
    slug: "corpsite",
    title: "Revamping Airwallex's Site",
    year: "2022-23",
    role: "Product Strategy, Product Design, Product Management",
    blurb:
      "Redesigning all of Airwallex's product landing pages, defining product positioning for their new embedded finance products, and leading the launch for 11 regions.",
    imageSrc: "/images/projects/airwallex-narratives.jpg",
    imageAlt: "Website of Airwallex's new embedded finance products",
  },
  {
    slug: "localization",
    title: "Image Localization Tool",
    year: "2023",
    role: "Product Management",
    blurb:
      "Leading an initiative to build an image localization tool for Airwallex's website revamp project under stakeholder pressure.",
    imageSrc: "/images/projects/image-localization.jpg",
    imageAlt: "Localized image assets for Airwallex's website",
  },
  {
    slug: "plugin",
    title: "AI copy suggestion Figma plugin",
    year: "2023",
    role: "Product Management",
    blurb:
      "Built a GPT powered copy suggestion Figma plugin for designers to improve their copy based on content guidelines.",
    imageSrc: "/images/projects/copy-plugin.jpg",
    imageAlt: "Figma plugin for AI copy suggestions",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

// Provide BOTH a named and a default export to avoid confusion.
export default projects;
