import React, { useState } from 'react';

import SEO from '../components/seo';
import Layout from './Layout';
import Page from './Page';
import ProjectHeader from './ProjectHeader';
import ProjectFooter from './ProjectFooter';
import ProjectGallery from './ProjectGallery';

const ProjectLayout = ({ project }) => {

    const { heading, data, image, content, screenshots } = project;

    const [ showGallery, setShowGallery ] = useState(false);
    const [ current, setCurrent ] = useState(0);

    const openGalleryHandler = index => {
        setCurrent(index);
        setShowGallery(true);
    }

    return (
        <Layout>
            <SEO title={heading} />
            <Page className={`project project-grid`}>
                <ProjectHeader heading={heading} data={data} image={image.full} />
                <main className="project__body">
                    {content}
                </main>
                <hr />
                <ProjectFooter screenshots={screenshots} openGallery={openGalleryHandler} />
                {showGallery && <ProjectGallery close={() => setShowGallery(false)} items={screenshots.full} current={current} />}
            </Page>
        </Layout>
    )
}

export default ProjectLayout;