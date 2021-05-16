import React from 'react';
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Link = ({ children, to, direction = 'right' }) => (
    <AniLink to={to} cover bg='#363636' direction={direction}>
        {children}
    </AniLink>
)

export default Link;