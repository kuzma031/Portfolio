import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image";

const ProjectGallery = ({ screenshots, openGallery }) => {

    const { preview } = screenshots;

    return (
        <footer className="project__gallery">
            <header className="project__gallery--header">
                <h4 className="project__gallery--heading"> 
                    Screenshots
                </h4>
                <p className="project__gallery--desc">
                    For demonstration purposes, on some images parts of DOM was cut when taking screenshots.
                </p>
            </header>
            <div className="project__gallery--container">
                {preview.map((image,index)=> (
                    <div className="project__gallery--item" key={index} onClick={() => openGallery(index)} role="button" tabIndex={index} aria-hidden="true">
                        <GatsbyImage image={image} objectFit='cover' alt='screenshot' />
                    </div>
                ))}
            </div>
        </footer>
    );
}

export default ProjectGallery;