import React, { useState } from 'react';

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
  } from '../components/Icons';

const Skills = () => {

    const [ skills ] = useState([
        {
            title: "Frontend",
            icon: <ReactIcon />,
            iconClass: "react",
            text: `<span class="selected">React.js</span>, <span class="selected">Gatsby.js</span>, Next.js, React Native`,
        },
        {
            title: "Layouts",
            icon: <SassIcon />,
            iconClass: "layouts",
            text: `<span class="selected">JSX</span>, EJS, <span class="selected">Sass</span>, Bootstrap`,
        },
        {
            title: "CMS",
            icon: <WordpressIcon />,
            iconClass: "cms",
            text: `<span class="selected">WordPress</span>, <span class="selected">DatoCMS</span>, Contentfull, Netlify CMS`,
        },
        {
            title: "Backend",
            icon: <NodeIcon />,
            iconClass: "node",
            text: `<span class="selected">Node.js</span>, <span class="selected">Express.js</span>, Koa.js, PHP`,
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
            text: `<span class="selected">GitHub</span>, GitLab, Bitbucket`,
        },
        {
            title: "Tools",
            icon: <SlackIcon />,
            iconClass: "db",
            text: `<span class="selected">Webpack</span>, <span class="selected">VSCode</span>, <span class="selected">Figma</span>, <span class="selected">Slack</span>, Photoshop`,
        }
    ]);

    return skills;
}

export default Skills;