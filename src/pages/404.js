import React from 'react';

import SEO from '../components/seo';
import Layout from '../components/Layout';
import Page from '../components/Page';
import { NotFound } from '../components/Icons';

const index = () => {

    return (
        <Layout isHome>
            <SEO title='404' />
            <Page title='404 Not Found' subtitle='Oops. The requested page is not found.' className="_404">
                <div className="_404__icon"> 
                    <NotFound />
                </div>
            </Page>
        </Layout>
    )
}

export default index;