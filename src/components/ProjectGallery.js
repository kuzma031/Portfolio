import React, { useState } from 'react';
import { GatsbyImage } from "gatsby-plugin-image";

import { CloseIcon, ArrowIcon } from './Icons';

const ProjectGallery = ({ close, items, current = 0 }) => {

    const [ active, setActive ] = useState(current);

    const changeImageHandler = to => {
        const total = items.length;
        let next = to === 'previous' ? active - 1 : active + 1;
        if(next === -1) next = total - 1;
        if(next === total) next = 0;
        setActive(next);
    }

    return (
        <div className="gallery">
            <button className="gallery__close" onClick={close}>
                <CloseIcon />
            </button>
            <div className="gallery__navigation">
                <button className="gallery__navigation--left" onClick={() => changeImageHandler('previous')}>
                    <ArrowIcon />
                </button>
                <button className="gallery__navigation--right" onClick={() => changeImageHandler('next')}>
                    <ArrowIcon />
                </button>
            </div>
            <div className="gallery__container">
                {items.map((image, index) => index === active && (
                    <div className="gallery__container--item" key={index}>
                        <GatsbyImage image={image} objectFit='contain' alt='gallery-image' />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProjectGallery;