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
  {
    slug: "search",
    title: "Redesigning AI Search",
    year: "2024",
    role: "Product Design",
    blurb:
      "Redesigning the user experience for Glean's traditional search and AI powered search results page.",
    imageSrc: "/images/projects/ai-search-redesign.jpg",
    imageAlt: "AI search results page redesign",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

// Provide BOTH a named and a default export to avoid confusion.
export default projects;
