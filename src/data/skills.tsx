import React from "react"
import { Skill } from "../types"

import {
  DatabaseIcon,
  CloudIcon,
  ReactIcon,
  NodeIcon,
  WordpressIcon,
  SassIcon,
  UbuntuIcon,
  GitHubIcon,
  SlackIcon,
} from "../components/Icons"

export const skillsData: Skill[] = [
  {
    title: "Frontend",
    icon: <ReactIcon />,
    iconClass: "react",
    text: `<span class="selected">React.js</span>, <span class="selected">React Native</span> <span class="selected">Next.js</span>, Gatsby.js`,
  },
  {
    title: "Layouts",
    icon: <SassIcon />,
    iconClass: "layouts",
    text: `<span class="selected">TSX</span>, <span class="selected">Sass</span>, Tailwind, Prime React, MaterialUI`,
  },
  {
    title: "CMS",
    icon: <WordpressIcon />,
    iconClass: "cms",
    text: `<span class="selected">WordPress</span>, DatoCMS, Contentfull, Netlify CMS`,
  },
  {
    title: "Backend",
    icon: <NodeIcon />,
    iconClass: "node",
    text: `<span class="selected">Node.js</span>, <span class="selected">Express.js</span>, Nest.js, PHP, Python`,
  },
  {
    title: "Database",
    icon: <DatabaseIcon />,
    iconClass: "db",
    text: `<span class="selected">MongoDB</span>, Mongoose, MariaDB, PostgreSQL`,
  },
  {
    title: "Cloud",
    icon: <CloudIcon />,
    iconClass: "cloud",
    text: `<span class="selected">AWS</span>, EC2, S3, Lambda`,
  },
  {
    title: "OS",
    icon: <UbuntuIcon />,
    iconClass: "db",
    text: `<span class="selected">Ubuntu</span>, <span class="selected">Windows 10</span>, Fedora, Kali Linux`,
  },
  {
    title: "Version Control",
    icon: <GitHubIcon />,
    iconClass: "git",
    text: `<span class="selected">GitHub</span>, <span class="selected">GitLab</span>, Bitbucket`,
  },
  {
    title: "Tools",
    icon: <SlackIcon />,
    iconClass: "db",
    text: `<span class="selected">Webpack</span>, <span class="selected">VSCode</span>, <span class="selected">Cursor AI</span>, <span class="selected">Figma</span>, <span class="selected">Slack</span>, Photoshop`,
  },
]

// Export a function to get skills (for backward compatibility if needed)
export const getSkills = (): Skill[] => {
  return skillsData
}
