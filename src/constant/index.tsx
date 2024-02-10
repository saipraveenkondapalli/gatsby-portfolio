import * as React from "react"
// @ts-ignore
import studentClubImg from "../images/studentClub.jpg"
// @ts-ignore
import interviewPrepPro from "../images/interviewPrepPro.jpg"
// @ts-ignore
import pragatiLogo from "../images/pragati.png"
// @ts-ignore
import adityaLogo from "../images/aditya.png"
// @ts-ignore
import umassLogo from "../images/umass.svg"
// @ts-ignore
import IcLogo from "../images/inheritcloud.webp"

import { FaDatabase, FaGitAlt, FaJs, FaReact } from "react-icons/fa"
import { FaC, FaJava, FaPython } from "react-icons/fa6"
import {
  SiAmazonaws,
  SiAwslambda,
  SiBootstrap,
  SiDjango,
  SiDocker,
  SiFirebase,
  SiFlask,
  SiGoogle,
  SiMongodb,
  SiMysql,
  SiPython,
  SiSqlite,
  SiTypescript,
} from "react-icons/si"

const menuLinks = [
  { name: "About Me", route: "/about" },
  { name: "Contact", route: "/contact" },
  { name: "Blog", route: "/blog" },
]

const programmingLanguages = [
  {
    name: "Python",
    icon: <FaPython fontSize="20px" />,
    url: "https://www.python.org/",
  },
  {
    name: "Java",
    icon: <FaJava fontSize="20px" />,
    url: "https://www.java.com/en/",
  },
  {
    name: "C",
    icon: <FaC fontSize="20px" />,
    url: "https://en.wikipedia.org/wiki/C_(programming_language)",
  },
  {
    name: "JavaScript",
    icon: <FaJs fontSize="20px" />,
    url: "https://www.javascript.com/",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript fontSize="20px" />,
    url: "https://www.typescriptlang.org/",
  },
  {
    name: "SQL",
    icon: <FaDatabase fontSize="20px" />,
    url: "https://www.sql.com/",
  },
  {
    name: "SQLite",
    icon: <SiSqlite fontSize="20px" />,
    url: "https://www.sqlite.org/",
  },
  {
    name: "MySQL",
    icon: <SiMysql fontSize="20px" />,
    url: "https://www.mysql.com/",
  },
  {
    name: "NoSQL",
    icon: <FaDatabase fontSize="20px" />,
    url: "https://en.wikipedia.org/wiki/NoSQL",
  },

  {
    name: "MongoDB",
    icon: <SiMongodb fontSize="20px" />,
    url: "https://www.mongodb.com/",
  },
  {
    name: "Flask",
    icon: <SiFlask fontSize="20px" />,
    url: "https://flask.palletsprojects.com/",
  },
  {
    name: "Django",
    icon: <SiDjango fontSize="20px" />,
    url: "https://www.djangoproject.com/",
  },
  {
    name: "Bootstrap",
    icon: <SiBootstrap fontSize="20px" />,
    url: "https://getbootstrap.com/",
  },
  {
    name: "React",
    icon: <FaReact fontSize="20px" />,
    url: "https://reactjs.org/",
  },
]

const otherTechStacks = [
  // {
  //   name: "CI/CD - Fastlane",
  //   icon: <SiFastlane fontSize="20px" />,
  //   url: "https://fastlane.tools/"
  // },
  {
    name: "Docker",
    icon: <SiDocker fontSize="20px" />,
    url: "https://www.docker.com/",
  },
  {
    name: "AWS",
    icon: <SiAmazonaws fontSize="20px" />,
    url: "https://aws.amazon.com/",
  },
  {
    name: "AWS Lambda",
    icon: <SiAwslambda fontSize="20px" />,
    url: "https://aws.amazon.com/lambda/",
  },
  {
    name: "Unit testing",
    icon: <SiPython fontSize="20px" />,
    url: "https://docs.python.org/3/library/unittest.html",
  },
  {
    name: "Pytest",
    icon: <SiPython fontSize="20px" />,
    url: "https://docs.pytest.org/",
  },

  {
    name: "Firebase",
    icon: <SiFirebase fontSize="20px" />,
    url: "https://firebase.google.com/",
  },
  {
    name: "Github & GitLab",
    icon: <FaGitAlt fontSize="20px" />,
    url: "https://www.gitlab.com/",
  },
]

const sideProjects = [
  {
    name: "Interview Prep Pro",
    imageUrl: interviewPrepPro,
    alt: "Interview Prep Pro",
    link: "/interview-prep-pro",
    summary:
      '"Interview Prep Pro" is a project that helps individuals prepare for coding interviews at top technology companies. It features over 1200 coding questions from 150+ companies, organized by category and company. It also includes links to Leetcode problems and has a feature that allows users to contribute questions to keep the resource relevant to the current job market.',
    tech: [
      <FaPython fontSize="20px" />,
      <SiFlask fontSize="20px" />,
      <SiMongodb fontSize="20px" />,
      <SiBootstrap fontSize="20px" />,
      <SiGoogle fontSize="20px" />,
      <FaJs fontSize="20px" />,
    ],
  },

  {
    name: "Student Club Portal",
    imageUrl: studentClubImg,
    alt: "student club portal",
    summary:
      '"Student Club Portal" is a website aimed at streamlining and automating the management of activities for the "Press Club" at Pragati Engineering College in Surampalem, India. The website provides an efficient and organized platform to handle various club-related tasks, including report writing, grammatical checking, attendance tracking, and more.',
    link: "/student-club",
    tech: [
      <FaPython fontSize="20px" />,
      <SiFlask fontSize="20px" />,
      <SiBootstrap fontSize="20px" />,
      <FaJs fontSize="20px" />,
    ],
  },
]

const companies = [
  {
    title: "InheritCloud",
    alt: "inheritCloud",
    url: "https://www.inheritcloud.com/",
    role: "Software Developer, Freelance",
    skills: [
      "React",
      "Bootstrap",
      "Vite",
      "Python",
      "Flask",
      "SSO",
      "Google Login",
    ],
    period: "Oct 2023 - Jan 2024",
    logo: IcLogo,
  },
]

const educations = [
  {
    title:
      "Pragati Engineering College, Jawaharlal Nehru Technological University, Kakinada",
    alt: "jntuk image",
    url: "https://pragati.ac.in",
    role: "Bachelor's Degree inTechnology (Electronics and Communication Engineering",
    skills: ["CGPA - 8.3/10"],
    period: "Aug 2019 - June 2023",
    logo: pragatiLogo,
  },
  {
    title:
      "Aditya Junior College, Board of Intermediate Education, Andhra Pradesh",
    alt: "aditya image",
    url: "https://aditya.ac.in/jrcollege/",
    role: "MPC- Mathematics, Physics, Chemistry",
    skills: ["CGPA - 10/10", "Maths ", "Physics", "Chemistry"],
    period: "June 2018 - April 2019",
    logo: adityaLogo,
  },
]

const achivements = [
  {
    name: "Global Entrepreneurship Exchange 2021",
    competition: "Business Pitch Competition",
    Organisation:
      "Manning School of Business, University of Massachusetts Lowell",
    date: "July 2021",
    link: "https://www.uml.edu/msb/global-entrepreneurship/programs/workshops/past-workshops.aspx",
    description:
      "Won 1st prize in a business pitch competition with my team (6– 3 India, 2 USA, 1 Burma).",
    logo: umassLogo,
  },
  {
    name: "Global Entrepreneurship Exchange 2022",
    competition: "Business Pitch Competition(Team leader)",
    Organisation:
      "Manning School of Business, University of Massachusetts Lowell",
    date: "June 2022",
    link: "https://www.uml.edu/msb/global-entrepreneurship/programs/workshops/past-workshops.aspx",
    description:
      "Won 1st prize in a business pitch competition with my team (6– 3 India, 2 USA, 1 Burma).",
    logo: umassLogo,
  },
]

export {
  menuLinks,
  programmingLanguages,
  otherTechStacks,
  sideProjects,
  companies,
  educations,
  achivements,
}
