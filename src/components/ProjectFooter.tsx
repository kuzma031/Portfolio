import React from "react"
import Image from "next/image"
import { ProjectFooterProps } from "@/types"

const ProjectFooter: React.FC<ProjectFooterProps> = ({
  screenshots,
  openGallery,
}) => {
  const { preview } = screenshots

  return (
    <footer className="project__gallery">
      <header className="project__gallery--header">
        <h4 className="project__gallery--heading">Screenshots</h4>
        <p className="project__gallery--desc">
          For demonstration purposes, on some images parts of DOM was cut when
          taking screenshots.
        </p>
      </header>
      <div className="project__gallery--container">
        {preview.map((image, index) => (
          <div
            className="project__gallery--item"
            key={index}
            onClick={() => openGallery(index)}
            role="button"
            tabIndex={index}
            aria-hidden="true"
          >
            <Image
              src={image}
              alt="screenshot"
              width={510}
              height={260}
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </footer>
  )
}

export default ProjectFooter
