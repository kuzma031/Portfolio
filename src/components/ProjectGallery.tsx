import React, { useState } from "react"
import Image from "next/image"
import { useSwipeable } from "react-swipeable"
import { ProjectGalleryProps } from "@/types"

import { CloseIcon, ArrowIcon } from "./Icons"

const ProjectGallery: React.FC<ProjectGalleryProps> = ({
  close,
  items,
  current = 0,
}) => {
  const [active, setActive] = useState(current)

  const changeImageHandler = (to: "previous" | "next") => {
    const total = items.length
    let next = to === "previous" ? active - 1 : active + 1
    if (next === -1) next = total - 1
    if (next === total) next = 0
    setActive(next)
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => changeImageHandler("next"),
    onSwipedRight: () => changeImageHandler("previous"),
    trackMouse: true,
  })

  return (
    <div className="gallery" {...handlers}>
      <button className="gallery__close" onClick={close} type="button">
        <CloseIcon />
      </button>
      <div className="gallery__navigation">
        <button
          className="gallery__navigation--left"
          onClick={() => changeImageHandler("previous")}
          type="button"
        >
          <ArrowIcon />
        </button>
        <button
          className="gallery__navigation--right"
          onClick={() => changeImageHandler("next")}
          type="button"
        >
          <ArrowIcon />
        </button>
      </div>
      <div className="gallery__container">
        {items.map(
          (image, index) =>
            index === active && (
              <div className="gallery__container--item" key={index}>
                <Image
                  src={image}
                  alt="gallery-image"
                  fill
                  style={{ objectFit: "contain" }}
                  quality={70}
                />
              </div>
            ),
        )}
      </div>
    </div>
  )
}

export default ProjectGallery
