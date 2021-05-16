import React from 'react';

import ProjectPageLayout from '../components/ProjectPageLayout';
import useProjects from '../hooks/useProjects';

const GridZone = () => {

    const projects = useProjects();

    return <ProjectPageLayout project={projects[0]} />
}

export default GridZone;