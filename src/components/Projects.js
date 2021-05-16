import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image";

import Link from './Link';
import Page from './Page'; 
import useProjects from '../hooks/useProjects';

const Projects = () => {

    const projects = useProjects();

    return (
        <Page className='page__projects' id='projects' title='Projects'> 
            <div className="projects__container"> 
                {projects.map((project, index) => {
                    const { heading, desc, link, image, tags } = project;
                    return ( 
                        <div className="projects__box" key={index}>
                            <div className="projects__box--image">
                                <Link to={link}>
                                    <GatsbyImage image={image.preview} objectFit='cover' alt={`${heading}-preview`} />
                                </Link>
                            </div>
                            <div className="projects__box--description">
                                <div className="projects__box--tags">
                                    {tags.map((tag, index) => (
                                        <div className="tag" key={index}>
                                            {tag}
                                        </div>
                                    ))}
                                </div>
                                <h4 className="projects__box--heading">
                                    <Link to={link}>
                                        {heading}
                                    </Link>
                                </h4>
                                <p className="projects__box--desc">
                                    {desc}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </Page>
    )
}

export default Projects;