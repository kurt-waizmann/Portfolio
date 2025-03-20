import { IconType } from "react-icons";
import { FaGit } from "react-icons/fa";
import {
  IoLogoAngular,
  IoLogoCss3,
  IoLogoHtml5,
  IoLogoJavascript,
  IoLogoNodejs,
  IoLogoReact,
  IoLogoSass,
} from "react-icons/io5";
import {
  SiBootstrap,
  SiBruno,
  SiConfluence,
  SiDocker,
  SiExpress,
  SiFigma,
  SiFormik,
  SiGithub,
  SiGitlab,
  SiGraphql,
  SiJest,
  SiJira,
  SiMongodb,
  SiMui,
  SiMysql,
  SiNestjs,
  SiPayloadcms,
  SiPostgresql,
  SiPostman,
  SiReacthookform,
  SiReactquery,
  SiSourcetree,
  SiStorybook,
  SiStrapi,
  SiStyledcomponents,
  SiTailwindcss,
  SiTrello,
  SiTypescript,
} from "react-icons/si";
import { TbBrandFramerMotion, TbBrandNextjs } from "react-icons/tb";
import { DiScrum } from "react-icons/di";
import { GrStatusUnknown } from "react-icons/gr";
import { PiKanban } from "react-icons/pi";
import { ProficiencySubcategory } from "../types/types.common";
import {
  BackEnd,
  Versionning,
  Design,
  DevOps,
  Frontend,
  Testing,
  Methodologies,
} from "../enums/enums.common";

export type Proficiency = {
  readonly name: string;
  readonly icon: IconType;
  readonly category: ProficiencySubcategory;
  readonly size?: string;
};

const frontend: Proficiency[] = [
  {
    name: "HTML",
    icon: IoLogoHtml5,
    category: Frontend.CoreTech,
  },
  {
    name: "Javascript",
    icon: IoLogoJavascript,
    category: Frontend.CoreTech,
  },
  {
    name: "CSS",
    icon: IoLogoCss3,
    category: Frontend.CoreTech,
  },
  {
    name: "React",
    icon: IoLogoReact,
    category: Frontend.Frameworks,
  },
  {
    name: "Angular",
    icon: IoLogoAngular,
    category: Frontend.Frameworks,
  },
  {
    name: "Sass",
    icon: IoLogoSass,
    category: Frontend.Styling,
  },
  {
    name: "Styled Components",
    icon: SiStyledcomponents,
    category: Frontend.Styling,
    size: "60px",
  },
  {
    name: "Material UI",
    icon: SiMui,
    category: Frontend.UILibraries,
  },
  {
    name: "Bootstrap",
    icon: SiBootstrap,
    category: Frontend.UILibraries,
  },
  {
    name: "Tailwind",
    icon: SiTailwindcss,
    category: Frontend.UILibraries,
  },
  {
    name: "Formik",
    icon: SiFormik,
    category: Frontend.FormManagement,
  },
  {
    name: "Yup",
    icon: GrStatusUnknown,
    category: Frontend.FormManagement,
  },
  {
    name: "TanStack Query",
    icon: SiReactquery,
    category: Frontend.FormManagement,
  },
  {
    name: "React Hook Form",
    icon: SiReacthookform,
    category: Frontend.FormManagement,
  },
  {
    name: "Framer Motion",
    icon: TbBrandFramerMotion,
    category: Frontend.Animation,
  },
  {
    name: "Next.js",
    icon: TbBrandNextjs,
    category: Frontend.Frameworks,
  },
  {
    name: "Zustand",
    icon: GrStatusUnknown,
    category: Frontend.StateManagement,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    category: Frontend.CoreTech,
  },
];

const backend: Proficiency[] = [
  {
    name: "Node.js",
    icon: IoLogoNodejs,
    category: BackEnd.Frameworks,
  },
  {
    name: "NestJS",
    icon: SiNestjs,
    category: BackEnd.Frameworks,
  },
  {
    name: "Express",
    icon: SiExpress,
    category: BackEnd.Frameworks,
  },
  {
    name: "Postgres",
    icon: SiPostgresql,
    category: BackEnd.Databases,
  },
  {
    name: "MySQL",
    icon: SiMysql,
    category: BackEnd.Databases,
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    category: BackEnd.Databases,
  },
  {
    name: "GraphQL",
    icon: SiGraphql,
    category: BackEnd.APIManagement,
  },
  {
    name: "Strapi",
    icon: SiStrapi,
    category: BackEnd.CMS,
  },
  {
    name: "Payload CMS",
    icon: SiPayloadcms,
    category: BackEnd.CMS,
  },
];

const testing: Proficiency[] = [
  {
    name: "Jest",
    icon: SiJest,
    category: Testing.Frameworks,
  },
  {
    name: "React Testing Library",
    icon: GrStatusUnknown,
    category: Testing.Frameworks,
  },
  {
    name: "Storybook",
    icon: SiStorybook,
    category: Testing.Frameworks,
  },
  {
    name: "Postman",
    icon: SiPostman,
    category: Testing.APItools,
  },
  {
    name: "Bruno",
    icon: SiBruno,
    category: Testing.APItools,
  },
];

const design: Proficiency[] = [
  {
    name: "Figma",
    icon: SiFigma,
    category: Design.UXUITools,
  },
];

const devOps: Proficiency[] = [
  {
    name: "Docker",
    icon: SiDocker,
    category: DevOps.Containerization,
  },
];

const methodologies: Proficiency[] = [
  {
    name: "Agile/Scrum",
    icon: DiScrum,
    category: Methodologies.Workflows,
  },
  {
    name: "Kanban",
    icon: PiKanban,
    category: Methodologies.Workflows,
  },
  {
    name: "Confluence",
    icon: SiConfluence,
    category: Methodologies.ProjectManagement,
  },
  {
    name: "Jira",
    icon: SiJira,
    category: Methodologies.ProjectManagement,
  },
  {
    name: "Trello",
    icon: SiTrello,
    category: Methodologies.ProjectManagement,
  },
];

const versionning: Proficiency[] = [
  {
    name: "Git",
    icon: FaGit,
    category: Versionning.VersionControl,
  },
  {
    name: "Github",
    icon: SiGithub,
    category: Versionning.Repositories,
  },
  {
    name: "Gitlab",
    icon: SiGitlab,
    category: Versionning.Repositories,
  },
  {
    name: "Sourcetree",
    icon: SiSourcetree,
    category: Versionning.VersionControl,
  },
];

export const proficiencies: Proficiency[] = [
  ...frontend,
  ...backend,
  ...testing,
  ...design,
  ...devOps,
  ...methodologies,
  ...versionning,
];
