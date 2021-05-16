import React from 'react'; 
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";

import Link from '../components/Link';
import SocialMenu from './SocialMenu';

const query = graphql`
query SidebarQuery {
    file(relativePath: {eq: "avatar.jpg"}) {
        childImageSharp {
            gatsbyImageData(layout: FIXED, width: 220, height: 220, quality: 100)
        }
    }
  }
`;

const Sidebar = () => {

    const data = useStaticQuery(query);
    const avatar = data.file.childImageSharp.gatsbyImageData;

    return (
        <aside className="sidebar">
            <div className="sidebar__content">
                <div className="sidebar__avatar">
                    <Link to='/' direction='left'> 
                        <GatsbyImage image={avatar} alt="avatar" />
                    </Link>
                </div>
                <div className="sidebar__text">
                    <h2 className="sidebar__name">
                        Đorđe Kuzmanović
                    </h2>
                    <h3 className="sidebar__desc">
                        <span className="responsive">Full-Stack</span>
                        <span>Software Developer</span>
                    </h3>
                    <h4 className="sidebar__country">
                        Belgrade, Serbia
                    </h4>
                    <SocialMenu />
                </div>
            </div>
        </aside>
    )
}

export default Sidebar;