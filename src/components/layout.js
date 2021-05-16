import React, { useState } from 'react';

import Link from './Link';
import Sidebar from './Sidebar';
import SocialMenu from './SocialMenu';

import '../sass/index.scss';

const Layout = ({ children, isHome }) => {

    const [ showMenu, setShowMenu ] = useState(false);

    const [ projects ] = useState([
        {
            title: 'Home',
            to: '/',
            direction: 'left'
        },
        {
            title: 'GridZone',
            to: '/gridzone'
        },
        {
            title: 'Valudio',
            to: '/valudio'
        },
        {
            title: 'Heata',
            to: '/heata'
        },
        {
            title: 'Scorpio',
            to: '/scorpio'
        },
        {
            title: 'Inboxroad',
            to: '/inboxroad'
        },
        {
            title: 'buildwithubs',
            to: '/buildwithhubs'
        }
    ]);

    const mainMenu = (
        <ul className="navigation__menu">
            <li>
                <a href='#about' onClick={() => setShowMenu(false)}>
                    About
                </a>
            </li>
            <li>
                <a href='#projects' onClick={() => setShowMenu(false)}>
                    Projects
                </a>
            </li>
            <li>
                <a href='#tools' onClick={() => setShowMenu(false)}>
                    Tools
                </a>
            </li>
            <li>
                <a href='#contact' onClick={() => setShowMenu(false)}>
                    Contact
                </a>
            </li>
        </ul>  
    );

    const projectsMenu = (
        <ul className="navigation__menu">
            {projects.map((item) => (
                <li key={item.title}>
                    <Link to={item.to} direction={item.direction}>
                        {item.title}
                    </Link>
                </li>
            ))}
        </ul>
    );

    return (
        <div className="layout">
            <button className={`navigation__trigger ${showMenu ? 'navigation__trigger--open' : ''}`} onClick={() => setShowMenu(!showMenu)}>
                <span />
                <span />
                <span />
                <span />
            </button>
            <div className={`navigation ${showMenu ? 'navigation__open' : ''}`}>
                <nav className="navigation__container">
                    {isHome ? mainMenu : projectsMenu}
                </nav>
                <SocialMenu inNav />
            </div>
            <Sidebar />
            <div className="page__container">
                {children}
            </div>
        </div>
    )
}

export default Layout;