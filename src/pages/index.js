import React from 'react';

import SEO from '../components/seo';
import Layout from '../components/Layout';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

const index = () => {

    return (
        <Layout isHome>
            <SEO title='Đorđe Kuzmanović' />
            <main className="main">
                <About />
                <Projects /> 
                <Skills /> 
                <Contact />
            </main>
        </Layout>
    )
}

export default index;