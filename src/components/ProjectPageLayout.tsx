import React, { useState } from "react"
import { ProjectLayoutProps } from "@/types"

import SEO from "../components/SEO"
import Layout from "./Layout"
import Page from "./Page"
import ProjectHeader from "./ProjectHeader"
import ProjectFooter from "./ProjectFooter"
import ProjectGallery from "./ProjectGallery"

const ProjectLayout: React.FC<ProjectLayoutProps> = ({ project }) => {
  const { heading, data, image, content, screenshots } = project

  const [showGallery, setShowGallery] = useState(false)
  const [current, setCurrent] = useState(0)

  const openGalleryHandler = (index: number) => {
    setCurrent(index)
    setShowGallery(true)
  }

  return (
    <Layout>
      <SEO title={`${heading} | Đorđe Kuzmanović`} />
      <Page className={`project project-grid`}>
        <ProjectHeader heading={heading} data={data} image={image.full} />
        <main className="project__body">{content}</main>
        <hr />
        <ProjectFooter
          screenshots={screenshots}
          openGallery={openGalleryHandler}
        />
        {showGallery && (
          <ProjectGallery
            close={() => setShowGallery(false)}
            items={screenshots.full}
            current={current}
          />
        )}
      </Page>
    </Layout>
  )
}

export default ProjectLayout
