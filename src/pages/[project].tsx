import React from "react"
import { useRouter } from "next/router"
import { GetStaticPaths, GetStaticProps } from "next"

import ProjectPageLayout from "../components/ProjectPageLayout"
import { projectsData } from "../data/projects"
import { Project } from "../types"

interface ProjectPageProps {
  projectSlug: string
}

const ProjectPage: React.FC<ProjectPageProps> = ({ projectSlug }) => {
  const router = useRouter()

  // Show loading state while page is being generated
  if (router.isFallback) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          fontSize: "1.2rem",
        }}
      >
        Loading project...
      </div>
    )
  }

  // Find the project data on the client side
  const project = projectsData.find(
    (p: Project) =>
      p.heading.toLowerCase().replace(/\s+/g, "-") === projectSlug,
  )

  if (!project) {
    return <div>Project not found</div>
  }

  return <ProjectPageLayout project={project} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Generate paths for all projects
  const paths = projectsData.map((project: Project) => ({
    params: {
      project: project.heading.toLowerCase().replace(/\s+/g, "-"),
    },
  }))

  return {
    paths,
    fallback: false, // Return 404 for any paths not generated
  }
}

export const getStaticProps: GetStaticProps<ProjectPageProps> = async ({
  params,
}) => {
  // Only pass the slug, not the full project object
  return {
    props: {
      projectSlug: params?.project as string,
    },
  }
}

export default ProjectPage
