import After from "../assets/after.png";
import BodyBreak from "../assets/bodybreak.png";
import FoodIdeas from "../assets/foodideas.png";

export type Project = {
  name: string;
  pic: string;
  github: string;
  website?: string;
  tech: string[];
  detail: string;
};

export const projects: Project[] = [
  {
    name: "After.",
    pic: After,
    github: "https://github.com/kurt-waizmann/After",
    website: "https://jointheafter.life/",
    tech: ["react", "javascript", "framer-motion"],
    detail:
      "An experiment in contextual storytelling for a fictional corporation and service. Includes various animation styles, an original video and writing.",
  },
  {
    name: "Body Break",
    pic: BodyBreak,
    github: "https://github.com/kurt-waizmann/Body-Break",
    website: "",
    tech: ["react", "javascript", "node.js", "mongodb", "express.js"],
    detail:
      "E-commerce website for sportswear products. Includes predictive searches, responsive shopping cart, RESTful APIs, and a database.",
  },
  {
    name: "Gimme Food!",
    pic: FoodIdeas,
    github: "https://github.com/kurt-waizmann/Make-a-Meal",
    website: "",
    tech: ["react", "javascript"],
    detail:
      "App (under development) that suggects meal ideas. Takes from an API to supply the user with a random recipe for a meal.",
  },
];
