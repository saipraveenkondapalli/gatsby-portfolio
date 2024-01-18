import * as React from "react"
// @ts-ignore
import studentClubImg from "../images/studentClub.jpg"
// @ts-ignore
import interviewPrepPro from "../images/interviewPrepPro.jpg"
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
  SiTypescript
} from "react-icons/si"

const menuLinks = [
  { name: "About Me", route: "/about" },
  { name: "Github", route: "/github" },
  { name: "Articles", route: "/article" },
  { name: "Contact", route: "/contact" }
]

const programmingLanguages = [
  {
    name: "Python",
    icon: <FaPython fontSize="20px" />,
    url: "https://www.python.org/"
  },
  {
    name: "Java",
    icon: <FaJava fontSize="20px" />,
    url: "https://www.java.com/en/"
  },
  {
    name: "C",
    icon: <FaC fontSize="20px" />,
    url: "https://en.wikipedia.org/wiki/C_(programming_language)"
  },
  {
    name: "JavaScript",
    icon: <FaJs fontSize="20px" />,
    url: "https://www.javascript.com/"
  },
  {
    name: "TypeScript",
    icon: <SiTypescript fontSize="20px" />,
    url: "https://www.typescriptlang.org/"
  },
  {
    name: "SQL",
    icon: <FaDatabase fontSize="20px" />,
    url: "https://www.sql.com/"
  },
  {
    name: "SQLite",
    icon: <SiSqlite fontSize="20px" />,
    url: "https://www.sqlite.org/"
  },
  {
    name: "MySQL",
    icon: <SiMysql fontSize="20px" />,
    url: "https://www.mysql.com/"
  },
  {
    name: "NoSQL",
    icon: <FaDatabase fontSize="20px" />,
    url: "https://en.wikipedia.org/wiki/NoSQL"
  },

  {
    name: "MongoDB",
    icon: <SiMongodb fontSize="20px" />,
    url: "https://www.mongodb.com/"
  },
  {
    name: "Flask",
    icon: <SiFlask fontSize="20px" />,
    url: "https://flask.palletsprojects.com/"
  },
  {
    name: "Django",
    icon: <SiDjango fontSize="20px" />,
    url: "https://www.djangoproject.com/"
  },
  {
    name: "Bootstrap",
    icon: <SiBootstrap fontSize="20px" />,
    url: "https://getbootstrap.com/"
  },
  {
    name: "React",
    icon: <FaReact fontSize="20px" />,
    url: "https://reactjs.org/"
  }
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
    url: "https://www.docker.com/"
  },
  {
    name: "AWS",
    icon: <SiAmazonaws fontSize="20px" />,
    url: "https://aws.amazon.com/"
  },
  {
    name: "AWS Lambda",
    icon: <SiAwslambda fontSize="20px" />,
    url: "https://aws.amazon.com/lambda/"
  },
  {
    name: "Unit testing",
    icon: <SiPython fontSize="20px" />,
    url: "https://docs.python.org/3/library/unittest.html"
  },
  {
    name: "Pytest",
    icon: <SiPython fontSize="20px" />,
    url: "https://docs.pytest.org/"
  },

  {
    name: "Firebase",
    icon: <SiFirebase fontSize="20px" />,
    url: "https://firebase.google.com/"
  },
  {
    name: "Github & GitLab",
    icon: <FaGitAlt fontSize="20px" />,
    url: "https://www.gitlab.com/"
  }
]


const sideProjects = [
  {
    name: "Interview Prep Pro",
    imageUrl: interviewPrepPro,
    alt: "Interview Prep Pro",
    summary: "\"Interview Prep Pro\" is a project that helps individuals prepare for coding interviews at top technology companies. It features over 1200 coding questions from 150+ companies, organized by category and company. It also includes links to Leetcode problems and has a feature that allows users to contribute questions to keep the resource relevant to the current job market.",
    tech: [
      <FaPython fontSize="20px" />,
      <SiFlask fontSize="20px" />,
      <SiMongodb fontSize="20px" />,
      <SiBootstrap fontSize="20px" />,
      <SiGoogle fontSize="20px" />,
      <FaJs fontSize="20px" />,


    ]
  },

  {
    name: "Student Club Portal",
    imageUrl: studentClubImg,
    alt: "student club portal",
    summary:
      "\"Student Club Portal\" is a website aimed at streamlining and automating the management of activities for the \"Press Club\" at Pragati Engineering College in Surampalem, India. The website provides an efficient and organized platform to handle various club-related tasks, including report writing, grammatical checking, attendance tracking, and more.",
    link: "https://nextjs-3commasclub-frontend.vercel.app/",
    tech: [
      <FaPython fontSize="20px" />,
      <SiFlask fontSize="20px" />,
      <SiBootstrap fontSize="20px" />,
      <FaJs fontSize="20px" />,
    ]
  }
]

export {
  menuLinks,
  programmingLanguages,
  otherTechStacks,
  sideProjects
}