import React from "react"
import Image from "next/image"
import { ProjectsProps, Project } from "../types"

import Link from "./Link"
import Page from "./Page"

import { projectsData } from "../data/projects"

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <Page className="page__projects" id="projects" title="Projects">
      <div className="projects__container">
        {projectsData.map((project: Project, index: number) => {
          const { heading, data, image } = project
          return (
            <div className="projects__box" key={index}>
              <div className="projects__box--image">
                <Link to={`/${heading.toLowerCase().replace(/\s+/g, "-")}`}>
                  <Image
                    src={image.preview}
                    alt={`${heading}-preview`}
                    width={434}
                    height={240}
                    style={{ objectFit: "cover" }}
                  />
                </Link>
              </div>
              <div className="projects__box--description">
                <div className="projects__box--tags">
                  {data.tech.split(", ").map((tag, index) => (
                    <div className="tag" key={index}>
                      {tag}
                    </div>
                  ))}
                </div>
                <h4 className="projects__box--heading">
                  <Link to={`/${heading.toLowerCase()}`}>{heading}</Link>
                </h4>
                <p className="projects__box--desc">
                  {data.role} at {data.client}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </Page>
  )
}

export default Projects
