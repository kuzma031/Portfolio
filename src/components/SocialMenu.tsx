import React from "react"
import { SocialMenuProps } from "@/types"

import {
  MailIcon,
  LinkedInIcon,
  GitHubIcon,
  InstagramIcon,
  UpworkIcon,
} from "./Icons"

const SocialMenu: React.FC<SocialMenuProps> = ({ inNav }) => (
  <nav className={`social ${inNav ? "social__navigation" : ""}`}>
    <ul>
      <li className="social__icon social__icon--mail">
        <a
          href="mailto:kuzma031@yahoo.com"
          role="button"
          aria-label="mail link"
        >
          <MailIcon />
        </a>
      </li>
      <li className="social__icon social__icon--linkedin">
        <a
          href="https://www.linkedin.com/in/djordje-kuzmanovic-447383144/"
          role="button"
          aria-label="linkedin link"
          target="_blank"
          rel="noreferrer noopener"
        >
          <LinkedInIcon />
        </a>
      </li>
      <li className="social__icon social__icon--github">
        <a
          href="https://github.com/kuzma031"
          role="button"
          aria-label="github link"
          target="_blank"
          rel="noreferrer noopener"
        >
          <GitHubIcon />
        </a>
      </li>
      {/* <li className="social__icon social__icon--instagram">
                <a href="https://www.instagram.com/kuzmadj/"  role="button" aria-label="instagram link" target="_blank" rel="noreferrer noopener"><InstagramIcon /></a>
            </li> */}
      <li className="social__icon social__icon--instagram">
        <a
          href="https://www.upwork.com/freelancers/~0195625e67b211557b"
          role="button"
          aria-label="upwork link"
          target="_blank"
          rel="noreferrer noopener"
        >
          <UpworkIcon />
        </a>
      </li>
    </ul>
  </nav>
)

export default SocialMenu
