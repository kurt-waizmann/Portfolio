import After from "../assets/after.png";
import i18next from "i18next";

export type Project = {
  name: string;
  pic: string;
  github?: string;
  website?: string;
  tech: string[];
  description: string;
};

export const projects: Project[] = [
  {
    name: "After.",
    pic: After,
    github: "https://github.com/kurt-waizmann/After",
    website: "https://jointheafter.life/",
    tech: ["react", "javascript", "framer-motion"],
    description:
      "An experiment in contextual storytelling for a fictional corporation and service. Includes various animation styles, an original video and writing.",
  },
  {
    name: "Air France Corporate",
    pic: After,
    website: "https://corporate.airfrance.com/",
    tech: ["react", "javascript", "framer-motion"],
    description:
      "An experiment in contextual storytelling for a fictional corporation and service. Includes various animation styles, an original video and writing.",
  },
  {
    name: "Satisfaction",
    pic: After,
    tech: ["react", "javascript", "framer-motion"],
    description: i18next.t("hero.bio"),
  },
  {
    name: "Internal Component Library",
    pic: After,
    tech: ["react", "javascript", "framer-motion"],
    description:
      "An experiment in contextual storytelling for a fictional corporation and service. Includes various animation styles, an original video and writing.",
  },
  {
    name: "Alithya CMS Template",
    pic: After,
    website: "https://www.paradedesjouets.ca/",
    tech: ["react", "javascript", "framer-motion"],
    description:
      "An experiment in contextual storytelling for a fictional corporation and service. Includes various animation styles, an original video and writing.",
  },
  {
    name: "AGA intranet",
    pic: After,
    tech: ["react", "javascript", "framer-motion"],
    description:
      "An experiment in contextual storytelling for a fictional corporation and service. Includes various animation styles, an original video and writing.",
  },
];
