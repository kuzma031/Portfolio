import React from "react"
import Image from "next/image"
import { ProjectHeaderProps } from "@/types"

const ProjectHeader: React.FC<ProjectHeaderProps> = ({
  heading,
  data,
  image,
}) => {
  const { role, client, date, tech } = data

  return (
    <header className="project__header">
      <h2 className="project__header--main">{heading}</h2>
      <div className="project__header--content">
        <div className="project__header--image">
          <Image
            src={image}
            alt={heading}
            width={624}
            height={336}
            priority
            style={{ objectFit: "contain", objectPosition: "top left" }}
          />
        </div>
        <div className="project__header--data">
          <div className="box" id="role">
            <p className="bold">Role</p>
            <p>{role}</p>
          </div>
          <div className="box" id="client">
            <p className="bold">Client</p>
            <p>{client}</p>
          </div>
          <div className="box" id="date">
            <p className="bold">Date</p>
            <p>{date}</p>
          </div>
          <div className="box" id="tech">
            <p className="bold">Tech</p>
            <p>{tech}</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default ProjectHeader
