import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image";

const ProjectHeader = ({ heading, data, image }) => {
    const { link, services, features, tech } = data;
    return (
        <header className="project__header">
            <h2 className="project__header--main">
                {heading}
            </h2>
            <div className="project__header--content">
                <div className="project__header--image">
                    <GatsbyImage image={image} objectFit='cover' alt={heading} />
                </div>
                <div className="project__header--data">
                    <div className="box" id="url">
                        <p>
                            <a href={link.href} target="_blank" rel="noreferrer noopener">
                                {link.text}
                            </a>
                        </p>
                    </div>
                    <div className="box" id="services">
                        <p className="bold">
                            Services
                        </p>
                        <p>
                            {services}
                        </p>
                    </div>
                    <div className="box" id="features">
                        <p className="bold">
                            Features
                        </p>
                        <p>
                            {features}
                        </p>
                    </div>
                    <div className="box" id="tech">
                        <p className="bold">
                            Tech 
                        </p>
                        <p>
                            {tech}
                        </p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default ProjectHeader;