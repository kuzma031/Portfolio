import React from "react"
import NextLink from "next/link"
import { LinkProps } from "@/types"

const Link: React.FC<LinkProps> = ({ children, to, direction = "right" }) => {
  return <NextLink href={to}>{children}</NextLink>
}

export default Link
