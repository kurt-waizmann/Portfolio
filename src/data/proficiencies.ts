import css from "../assets/code-logos/css3.png";
import express from "../assets/code-logos/express.png";
import figma from "../assets/code-logos/figma.png";
import html from "../assets/code-logos/html5.png";
import javascript from "../assets/code-logos/javascript.png";
import mongodb from "../assets/code-logos/mongodb.png";
import node from "../assets/code-logos/nodejs.png";
import react from "../assets/code-logos/react.png";
import sass from "../assets/code-logos/sass.png";
import style from "../assets/code-logos/styled.png";
import insomnia from "../assets/code-logos/insomnia.png";

export type Proficiency = {
  readonly name: string;
  readonly pic: string;
};

export const proficiencies: Proficiency[] = [
  {
    name: "HTML",
    pic: html,
  },
  {
    name: "CSS",
    pic: css,
  },
  {
    name: "Javascript",
    pic: javascript,
  },
  {
    name: "React",
    pic: react,
  },
  {
    name: "Sass",
    pic: sass,
  },
  {
    name: "Styled Components",
    pic: style,
  },
  {
    name: "Node.js",
    pic: node,
  },
  {
    name: "Express.js",
    pic: express,
  },
  {
    name: "MongoDB",
    pic: mongodb,
  },
  {
    name: "Insomnia",
    pic: insomnia,
  },
  {
    name: "Figma",
    pic: figma,
  },
];
