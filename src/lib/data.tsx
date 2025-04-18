import { Github, Linkedin, Instagram } from "lucide-react";

import LogoJavascript from "/public/images/logos/icon-javascript.svg";
import LogoTypescript from "/public/images/logos/icon-typescript.svg";
import LogoReact from "/public/images/logos/icon-react.svg";
import LogoNextjs from "/public/images/logos/icon-nextjs.svg";
import LogoNodejs from "/public/images/logos/icon-nodejs.svg";
import LogoExpress from "/public/images/logos/icon-express.svg";
import LogoExpressLight from "/public/images/logos/icon-express-light.svg";
import LogoNest from "/public/images/logos/icon-nest.svg";
import LogoSocket from "/public/images/logos/icon-socket.svg";
import LogoSocketLight from "/public/images/logos/icon-socket-light.svg";
import LogoPostgreSQL from "/public/images/logos/icon-postgresql.svg";
import LogoMongoDB from "/public/images/logos/icon-mongodb.svg";
import LogoSass from "/public/images/logos/icon-sass.svg";
import LogoTailwindcss from "/public/images/logos/icon-tailwindcss.svg";
import LogoFigma from "/public/images/logos/icon-figma.svg";
import LogoCypress from "/public/images/logos/icon-cypress.svg";
import LogoCypressLight from "/public/images/logos/icon-cypress-light.svg";
import LogoStorybook from "/public/images/logos/icon-storybook.svg";
import LogoGit from "/public/images/logos/icon-git.svg";
import SardarImg from "/public/images/Dlogo.png";

import LogoUpwork from "/public/images/logos/logo-upwork.svg";
import LogoGreenApex from "/public/images/logos/logo-greenapex.svg";
import LogoGreenApexLight from "/public/images/logos/logo-greenapex-light.svg";
import LogoDotnpixel from "/public/images/logos/logo-dotnpixel.svg";
import LogoDotnpixelLight from "/public/images/logos/logo-dotnpixel-light.svg";

import ProjectFiskil from "/public/images/project-fiskil.png";
import ProjectWingie from "/public/images/project-wingie.png";
import ProjectPepehousing from "/public/images/project-pepehousing.png";

import AvatarKrisztian from "/public/images/avatar-krisztian.png";
import AvatarEugen from "/public/images/avatar-eugen.png";
import AvatarDummy from "/public/images/avatar-dummy.svg";

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from "@/lib/types";

export const EXTERNAL_LINKS = {
  GITHUB: "https://github.com/sardaribrarahmad",
  // GITHUB_REPO: "https://github.com/shahsagarm/sagarshah.dev",
  // TWITTER: "https://twitter.com/shahsagarm",
  // FIGMA: "https://www.figma.com/@shahsagarm",
  // FIGMA_FILE:
  //   "https://www.figma.com/community/file/1262992249991763120/Personal-Portfolio-Website-Template-%7C-Mobile-%26-Desktop",
};

export const NAV_LINKS = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: "https://github.com/sardaribrarahmad",
  },
  {
    icon: Linkedin,
    url: "https://www.linkedin.com/in/sardar-ibrar-ahmad/",
  },
  {
    icon: Instagram,
    url: "https://www.instagram.com/sardar_ibrar_ahmad/",
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: "Javascript",
    logo: LogoJavascript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    label: "Typescript",
    logo: LogoTypescript,
    url: "https://www.typescriptlang.org/",
  },
  {
    label: "React",
    logo: LogoReact,
    url: "https://react.dev/",
  },
  {
    label: "Next.js",
    logo: LogoNextjs,
    url: "https://nextjs.org/",
  },
  {
    label: "Node.js",
    logo: LogoNodejs,
    url: "https://nodejs.org/en",
  },
  {
    label: "Express.js",
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: "https://expressjs.com/",
  },

  {
    label: "MongoDB",
    logo: LogoMongoDB,
    url: "https://www.mongodb.com/",
  },
  {
    label: "Sass/Scss",
    logo: LogoSass,
    url: "https://sass-lang.com/",
  },
  {
    label: "Tailwindcss",
    logo: LogoTailwindcss,
    url: "https://tailwindcss.com/",
  },
  {
    label: "Figma",
    logo: LogoFigma,
    url: "https://www.figma.com/",
  },
  {
    label: "Cypress",
    logo: LogoCypress,
    darkModeLogo: LogoCypressLight,
    url: "https://www.cypress.io/",
  },

  {
    label: "Git",
    logo: LogoGit,
    url: "https://git-scm.com/",
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: SardarImg,
    logoAlt: "Upwork logo",
    position: "Junior Mern Stack Developer",
    startDate: new Date(2024, 11),
    currentlyWorkHere: true,
    summary: [
      "Enhanced backend APIs calls workflow efficiency by implementing Saga and Thunk as middleware",
      "Bundled React.js applications using Webpack to optimize performance and streamline the deployment process",
      "Participating in code reviews and providing constructive feedback to other developers",
      "Implementing responsive design and ensuring cross-browser compatibility",
      "Proficient in utilizing Git version control and collaboration tools such as GitHub and Bitbucket to effectively manage codebases and foster seamless team collaboration",
    ],
    Name: "DevShine",
  },

  {
    logo: "",
    Name: "Dev District",
    darkModeLogo: "",
    logoAlt: "",
    position: "Frontend Developer",
    startDate: new Date(2024, 5),
    endDate: new Date(2024, 8),
    summary: [
      "End-to-End Development – Designed and developed production-level applications from scratch, ensuring scalability and performance",

      "Full Development Lifecycle – Managed the entire process from planning and development to deployment, ensuring smooth project execution",

      "Team Collaboration – Worked closely with cross-functional teams to align frontend development with overall project goals and user experience.",
    ],
  },
  {
    logo: "",
    Name: "Innov.dev",
    darkModeLogo: "",
    logoAlt: "",
    position: "Frontend Devloper ",
    startDate: new Date(2023, 5),
    endDate: new Date(2023, 8),
    summary: [
      "Worked with a variety of technologies, including React, Next.js, Typescript, Tailwindcss,Firebase,  and others",
    ],
  },
  // {
  //   logo: "",
  //   Name: "Innvo.dev",
  //   logoAlt: "",
  //   position: "Frontend Developer Intern",
  //   startDate: new Date(2022, 10),
  //   endDate: new Date(2022, 12),
  //   currentlyWorkHere: false,
  //   summary: [
  //     "Worked for various clients",
  //     "Worked with a variety of technologies, including React, Next.js, Typescript, Tailwindcss,Firebase,  and others",
  //   ],
  //   Name: "",
  // },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: "TaskFlow",
    description:
      "A modern task management web app that helps users organize their to-dos efficiently with real-time updates and a sleek UI",
    url: "",
    previewImage: ProjectWingie,
    technologies: [
      "React",
      "Typescript",
      "React Bootstrap",
      "Firebase",
      "Express.js",
      "Styled Components",
      "Redux",
    ],
  },
  {
    name: "DevConnect",
    description:
      "A networking platform for developers to share projects, collaborate, and engage in discussions with industry professionals",
    url: "",
    previewImage: ProjectFiskil,
    technologies: [
      "React",
      "Next.js",
      "Typescript",
      "Tailwindcss",
      "Material UI",
      "Redux Toolkit",
      "React Query",
      "Express.js",
      "Firebase",
    ],
  },
  {
    name: "Pepehousing",
    description:
      "A platform for renting a flat or room in Poland. You may browse hundreds of verified deals, contact the vendor, and pay online in a simple and secure manner.",
    url: "",
    previewImage: ProjectPepehousing,
    technologies: [
      "React",
      "Next.js",
      "Typescript",
      "Tailwindcss",
      "Redux Toolkit",
      "React Query",
    ],
  },
];

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: "Hamza Ahmad",
    personAvatar: AvatarDummy,
    title: "Client",
    testimonial:
      "Job well done! I am really impressed. He is very very good at what he does I would recommend sardar Ibrar and will rehire in the future for Frontend development.",
  },
  {
    personName: "Dev District",
    personAvatar: AvatarDummy,
    title: "founder",
    testimonial:
      "Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.",
  },
  {
    personName: "Joe Matkin",
    personAvatar: AvatarDummy,
    title: "Freelancer",
    testimonial:
      "Ibrar was extremely easy and pleasant to work with and he truly cares about the project being a success.Ibrar has a high level of knowledge and was able to work on my MERN stack application without any issues.",
  },
];