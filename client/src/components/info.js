//import images
import After from "../assets/after.png"
import BodyBreak from "../assets/bodybreak.png"
import Unknown from "../assets/unknown.png"
import css from "../assets/code-logos/css3.png"
import express from "../assets/code-logos/express.png"
import figma from "../assets/code-logos/figma.png"
import html from "../assets/code-logos/html5.png"
import javascript from "../assets/code-logos/javascript.png"
import mongodb from "../assets/code-logos/mongodb.png"
import node from "../assets/code-logos/nodejs.png"
import react from "../assets/code-logos/react.png"
import sass from "../assets/code-logos/sass.png"
import style from "../assets/code-logos/styled.png"
import insomnia from "../assets/code-logos/insomnia.png"


export const languages = [
    {
        name:"HTML",
        pic: html
    },
    {
        name:"CSS",
        pic: css
    },
    {
        name:"Javascript",
        pic: javascript
    },
    {
        name:"React",
        pic: react
    },
    {
        name:"Sass",
        pic: sass
    },
    {
        name:"Styled Components",
        pic: style
    },
    {
        name:"Node.js",
        pic: node
    },
    {
        name:"Express.js",
        pic: express
    },
    {
        name:"MongoDB",
        pic: mongodb
    },
    {
        name:"Insomnia",
        pic: insomnia
    },
    {
        name:"Figma",
        pic: figma
    }
];



export const projectInfo = [
    {
        name: "After.",
        pic: After,
        github: "https://github.com/kurt-waizmann/After",
        website: "https://jointheafter.life/",
        tech: ["react", "javascript", "framer-motion"],
        detail: "An experiment in contextual storytelling for a fictional corporation and service. Includes various animation styles, an original video and writing.",
    },
    {
        name: "Body Break",
        pic: BodyBreak,
        github: "https://github.com/kurt-waizmann/Body-Break",
        website: "",
        tech: ["react", "javascript", "node.js", "mongodb", "express.js"],
        detail: "E-commerce website for sportswear products. Includes predictive searches, responsive shopping cart, RESTful APIs, and a database.",
    },
    {
        name: "TBD",
        pic: Unknown,
        github: "https://github.com/kurt-waizmann/Body-Break",
        website: "",
        tech: ["react", "javascript", "node.js", "mongodb", "express.js"],
        detail: "Gotta add something here...",
    }
];

