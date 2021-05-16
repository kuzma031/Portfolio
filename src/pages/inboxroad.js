import React from 'react';

import ProjectPageLayout from '../components/ProjectPageLayout';
import useProjects from '../hooks/useProjects';

const Index = () => {

    const projects = useProjects();

    return <ProjectPageLayout project={projects[4]} />
}

export default Index;