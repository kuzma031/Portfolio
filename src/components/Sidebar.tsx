import React from "react"
import Image from "next/image"
import { SidebarProps } from "@/types"

import Link from "../components/Link"
import SocialMenu from "./SocialMenu"

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar__content">
        <div className="sidebar__avatar">
          <Link to="/" direction="left">
            <Image
              src="/images/avatar.jpg"
              alt="avatar"
              width={220}
              height={220}
            />
          </Link>
        </div>
        <div className="sidebar__text">
          <h2 className="sidebar__name">Đorđe Kuzmanović</h2>
          <h3 className="sidebar__desc">
            <span className="responsive">Full-Stack</span>
            <span>Software Developer</span>
          </h3>
          <h4 className="sidebar__country">Serbia</h4>
          <SocialMenu />
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
