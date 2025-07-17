import React from "react"

export interface SEOProps {
  title: string
  description?: string
  image?: string
  url?: string
  type?: "website" | "article"
  publishedAt?: string
  modifiedAt?: string
  section?: string
  tags?: string[]
  noindex?: boolean
  nofollow?: boolean
  children?: React.ReactNode
}

export interface ProjectData {
  role: string
  client: string
  date: string
  tech: string
}

export interface ProjectImage {
  preview: string
  full: string
}

export interface ProjectScreenshots {
  preview: string[]
  full: string[]
}

export interface Project {
  heading: string
  data: ProjectData
  image: ProjectImage
  content: React.ReactNode
  screenshots: ProjectScreenshots
}

export interface Skill {
  title: string
  icon: React.ReactNode
  iconClass: string
  text: string
}

export interface LayoutProps {
  children: React.ReactNode
  isHome?: boolean
}

export interface LinkProps {
  children: React.ReactNode
  to: string
  direction?: "left" | "right"
}

export interface ProjectLayoutProps {
  project: Project
}

export interface PageProps {
  id?: string
  title?: string
  subtitle?: string
  className?: string
  children: React.ReactNode
}

export interface ProjectHeaderProps {
  heading: string
  data: ProjectData
  image: string
}

export interface ProjectFooterProps {
  screenshots: ProjectScreenshots
  openGallery: (index: number) => void
}

export interface ProjectGalleryProps {
  close: () => void
  items: string[]
  current: number
}

export interface SocialMenuProps {
  inNav?: boolean
}

export interface SidebarProps {}

export interface AboutProps {}

export interface ProjectsProps {}

export interface SkillsProps {}

export interface ContactProps {}
