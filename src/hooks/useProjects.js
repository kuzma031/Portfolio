import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
query Projects {

    gridPreview: file(relativePath: {eq: "grid.png"}) {
        childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 434, height: 240, quality: 40) 
        }
    }
    gridFull: file(relativePath: {eq: "grid.png"}) {
        childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 900, height: 506, quality: 100) 
        }
    }
    gridScreenshotsPreview: allFile(filter: {relativeDirectory: {eq: "screenshots/grid"}}) {
        nodes {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 520, height: 260, quality: 50)
          }
        }
    }
    gridScreenshotsFull: allFile(filter: {relativeDirectory: {eq: "screenshots/grid"}}) {
        nodes {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, quality: 100)
          }
        }
    }

    scorpioPreview: file(relativePath: {eq: "scorpio.jpg"}) {
        childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 434, height: 240, quality: 40) 
        }
    }
    scorpioFull: file(relativePath: {eq: "scorpio.jpg"}) {
        childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 900, height: 506, quality: 100) 
        }
    }
    scorpioScreenshotsPreview: allFile(filter: {relativeDirectory: {eq: "screenshots/scorpio"}}) {
        nodes {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 520, height: 260, quality: 50)
          }
        }
    }
    scorpioScreenshotsFull: allFile(filter: {relativeDirectory: {eq: "screenshots/scorpio"}}) {
        nodes {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, quality: 100)
          }
        }
    }

    heataPreview: file(relativePath: {eq: "heata.jpg"}) {
        childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 434, height: 240, quality: 40) 
        }
    }
    heataFull: file(relativePath: {eq: "heata.jpg"}) {
        childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 900, height: 506, quality: 100) 
        }
    }
    heataScreenshotsPreview: allFile(filter: {relativeDirectory: {eq: "screenshots/heata"}}) {
        nodes {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 520, height: 260, quality: 50)
          }
        }
    }
    heataScreenshotsFull: allFile(filter: {relativeDirectory: {eq: "screenshots/heata"}}) {
        nodes {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, quality: 100)
          }
        }
    }

    hubsPreview: file(relativePath: {eq: "hubs.jpg"}) {
        childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 434, height: 240, quality: 40) 
        }
    }
    hubsFull: file(relativePath: {eq: "hubs.jpg"}) {
        childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 900, height: 506, quality: 100) 
        }
    }
    hubsScreenshotsPreview: allFile(filter: {relativeDirectory: {eq: "screenshots/hubs"}}) {
        nodes {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 520, height: 260, quality: 50)
          }
        }
    }
    hubsScreenshotsFull: allFile(filter: {relativeDirectory: {eq: "screenshots/hubs"}}) {
        nodes {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, quality: 100)
          }
        }
    }

    valudioPreview: file(relativePath: {eq: "valudio.jpg"}) {
        childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 434, height: 240, quality: 40) 
        }
    }
    valudioFull: file(relativePath: {eq: "valudio.jpg"}) {
        childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 900, height: 506, quality: 100) 
        }
    }
    valudioScreenshotsPreview: allFile(filter: {relativeDirectory: {eq: "screenshots/valudio"}}) {
        nodes {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 520, height: 260, quality: 50)
          }
        }
    }
    valudioScreenshotsFull: allFile(filter: {relativeDirectory: {eq: "screenshots/valudio"}}) {
        nodes {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, quality: 100)
          }
        }
    }

    inboxroadPreview: file(relativePath: {eq: "inboxroad.jpg"}) {
        childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 434, height: 240, quality: 40) 
        }
    }
    inboxroadFull: file(relativePath: {eq: "inboxroad.jpg"}) {
        childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 900, height: 506, quality: 100) 
        }
    }
    inboxroadScreenshotsPreview: allFile(filter: {relativeDirectory: {eq: "screenshots/inboxroad"}}) {
        nodes {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 520, height: 260, quality: 50)
          }
        }
    }
    inboxroadScreenshotsFull: allFile(filter: {relativeDirectory: {eq: "screenshots/inboxroad"}}) {
        nodes {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, quality: 100)
          }
        }
    }
}
`;

const gridContent = (
    <>
        <p>
            GridZone is the Next-Gen art-focused gamified social experience on Ethereum with unique digital identities, and interactive 3D NFT ART. GridZone is a place where every social interaction is smart contract interaction.|
        </p>
        <p>
            GridZone is my biggest project and work I'm most proud of. I started project from scratch, built everything, including server, database, backend and frontend. Now I lead team of people and we maintain this network. It was challenging to structure and maintain this codebase - its huge. 
        </p>
        <p>
            I choose EC2 instance on AWS, where we host NGINX server. On that server I run Mongodb instance where data is stored. I use Mongoose as wrapper to Mongodb. It was hard to choose database at the start, the first choice was Postgre, but since data was changing frequently, we choose Mongo. 
        </p>
        <p>
            Next, on the backend we choose Node.js - no question about it, its my favourite backend language. I choose express as a framework and the MVC as design pattern.  
        </p>
        <p>
            Frontend was the most challenging part. App design is very complex. There are lots of features we use, and design is complex too. The client wanted to go with React. We choose Redux to store all business logic in its files. Next, all components are separated into 3 folders, folder with presentation components only, folder with components that are repeated across app and components that are on a specific page only. I was changing folders structure lot of times as app grew, but we stick to this structure by the time of writing. For styling part, I use SCSS, its big - we have thousands of scss files.
        </p>
        <p>
            One of the best things about this app is skin changing. Its like dark/light mode, but much advanced. Each skin has its own styles, background videos and other things. You can check app look with different skins on screenshots. It's awesome!
        </p>
    </>
);

const valudioContent = (
    <>
        <p>
            Valudio is software design and development studio from Barcelona. They needed website to highlight their business and they wanted it in JAM stack. 
            The client wanted a site in Gatsby and to be able to edit data in Dato CMS.
        </p>
        <p>
            I got all designs ready and had the freedom to choose other technology. 
        </p>
        <p>
            Designs are straightforward and I went with SCSS since Gatsby is supporting it very well. Feel of the site is ok, they are showcasing their works to clients, say a word or two about their team and have a contact page. I like the color combinations of this site much, black combinations are awesome. 
        </p>
        <p>
            This is multi language website. It can be tricky sometimes with Gatsby. Lucky for me, Datmo CMS support for multi language is awesome. Client can easy change language in the backoffice of CMS, next all data is coming to Gatsby via the help of GraphQL. On frontend there is only 1 variable, which is changed based on user language. Based on that variable, different content is shown.
        </p>
        <p>
            Once again, good work and great site to help client boost business.
        </p>
    </>
);

const heataContent = (
    <>
        <p>
            Heata is innovative solution that will help people - its collecting heat from computers and transfer it into the water. 
        </p>
        <p>
            They wanted me to build site for them which will showcase that product. Idea was developed in the UK. Responsibility was greater since everything is supported by British Gas. 
        </p>
        <p>
            Designs were perfect - designed, documented and presented to me. All graphic was in SVG format. Client gave me freedom to choose technology as long it's going to be perfect. My decision was Gatsby, it was new technology for building static sites with React in that time. Innovative product - innovative technology. 
        </p>
        <p>
            No much challenges on this site, since its only presenting product to users. But when it comes layouts, client demanded everything to be perfect. I used custom CSS without frameworks and SASS to make everything organized better. It was not easy work since i was returned by client few times because i missed someting in pixel or two. Everything needed to be pixel-perfect as on designs.
        </p>
        <p>
            At the end, project was completed successfully and site was launched. I hope heata will make it since it really innovative and will help people. 
        </p>
    </>
);

const scorpioContent = (
    <>
        <p>
            Scorpio model management is a boutique agency founded in 2020. Its web app where potential models can apply for scouting. 
        </p>
        <p>
            This app was challenging because there are multiple different technologies combined. At the start we were talking about tech stack - first choice was JAM stack app with headless CMS like Contentfull or Dato, but later we decided WordPress is best choice - since the client had hosting and experience in WordPress. Data is coming from WordPress backoffice and its fetched via GraphQL.
        </p>
        <p>
            On frontend, Gatsby is responsible for everything. I got design from the client, which was looking very good. My task was to transfer all designs to pixel-perfect layots. There were lots of similiar content and layouts so i decided to use CSS Modules on this project. Its awesome feature of Webpack and you don't need to think about class names when using it.
        </p>
        <p>
            Potential models can apply on site, and their data is going from app to client backoffice in WordPress. Also, client can add current models and their information in WordPress and all data is displayed on the website. Few of Gatsby plugins are used here - to display models Instagram pictures, get data from WordPress, add Google Analytics etc.
        </p>
    </>
);

const inboxroadContent = (
    <>
        <p>
            Inboxroad is email marketing company from Amsterdam. They are awesome guys and it was my pleasure to work with them. 
        </p>
        <p>
            My job was to build a completly new website from scratch. Their only demand was to build it in WordPress. Since there were some custom plugins I decided it's best to build this as a WordPress theme in PHP. All data coming from backend is displayed on the template frontend with the help of WordPress functions. Most of the site is editable by client in WordPress admin.
        </p>
        <p>
            Inboxroad team had some demands about functionalities they needed - so i built few small plugins that help them function. Also pricing page was fully customizable with WooCommerce. At the time of writing, potential customers could choose from 4 different pricing plans with different variations. 
        </p>
        <p>
            On frontend, SASS is used to support Bootstrap layouts. For functionality I used jQuery.
        </p>
    </>
);

const hubsContent = (
    <>
        <p>
            Buildwithhubs is a great psyhical product where customers can build awesome domes very simple.
        </p>
        <p>
            The site is designed very nicely. I had all freedom to choose tech stack. Back in the time I was working mainly with PHP so this site was done in PHP too. At the start it was simple, but over the time it was upgraded and now it has some new functionalities like webshop and payment integration.
        </p>
        <p>
            It's built like hardcoded templates. It could be done in pure HTML, but PHP was better for code organization. On frontend jQuery is used to manipulate the DOM. There are some plugins added to site like Lightwidget - to display pictures from Instagram.  
        </p>
        <p>
            Challenging part of the website was to build calculator to calculate dome sizes. Its simple math, but some steps included SVG manipulation.
        </p>
    </>
);

const Projects = () => {

    const images = useStaticQuery(query);

    const [ projects ] = useState([
        {
            heading: 'GridZone',
            desc: 'Next-Gen Social Network',
            link: '/gridzone',
            image: {
                preview: images.gridPreview.childImageSharp.gatsbyImageData,
                full: images.gridFull.childImageSharp.gatsbyImageData,
            },
            tags: ['node', 'react', 'aws'],
            data: {
                link: {
                    href: 'https://gridzone.io/',
                    text: 'gridzone.io'
                },
                services: 'Software Architecture, Server Setup, Backend and Database Development, Frontend Development',
                features: 'Social Network, Smart Contracts, Online Chat, Web Radio, Web Shop, Skin Changes',
                tech: 'EC2, Nginx, Mongodb, Node.js, Express, Web Sockets, S3, React.js, Redux'
            },
            content: gridContent,
            screenshots: {
                preview: images.gridScreenshotsPreview.nodes.map(node => node.childImageSharp.gatsbyImageData),
                full: images.gridScreenshotsFull.nodes.map(node => node.childImageSharp.gatsbyImageData)
            }
        },
        {
            heading: 'Valudio',
            desc: 'Software Development Studio',
            link: '/valudio',
            image: {
                preview: images.valudioPreview.childImageSharp.gatsbyImageData,
                full: images.valudioFull.childImageSharp.gatsbyImageData,
            },
            tags: ['gatsby', 'jamstack', 'datocms'],
            data: {
                link: {
                    href: 'https://www.valudio.com/',
                    text: 'valudio.com'
                },
                services: 'JAM Stack Development, CMS Development, Frontend Development',
                features: 'Multi-language, CMS ( all content editable ), Responsive, Blog',
                tech: 'JAM Stack, Dato CMS, GraphQL, React.js, Gatsby.js, SCSS'
            },
            content: valudioContent,
            screenshots: {
                preview: images.valudioScreenshotsPreview.nodes.map(node => node.childImageSharp.gatsbyImageData),
                full: images.valudioScreenshotsFull.nodes.map(node => node.childImageSharp.gatsbyImageData)
            }
        },
        {
            heading: 'Heata',
            desc: 'harnessing heat from cloud compute',
            link: '/heata',
            image: {
                preview: images.heataPreview.childImageSharp.gatsbyImageData,
                full: images.heataFull.childImageSharp.gatsbyImageData,
            },
            tags: ['react', 'gatsby', 'scss'],
            data: {
                link: {
                    href: 'https://heata.co/',
                    text: 'heata.co'
                },
                services: 'Frontend Development',
                features: 'Responsive, Pixel-Perfect',
                tech: 'GraphQL, React.js, Gatsby.js, SCSS'
            },
            content: heataContent,
            screenshots: {
                preview: images.heataScreenshotsPreview.nodes.map(node => node.childImageSharp.gatsbyImageData),
                full: images.heataScreenshotsFull.nodes.map(node => node.childImageSharp.gatsbyImageData)
            }
        },
        {
            heading: 'Scorpio',
            desc: 'Model Management',
            link: '/scorpio',
            image: {
                preview: images.scorpioPreview.childImageSharp.gatsbyImageData,
                full: images.scorpioFull.childImageSharp.gatsbyImageData,
            },
            tags: ['next', 'wordpress', 'css modules'],
            data: {
                link: {
                    href: 'https://scorpiomodelmgmt.com/',
                    text: 'scorpiomodelmgmt.com'
                },
                services: 'WordPress Development, Frontend Development',
                features: 'SSR, CMS, User Management ( models )',
                tech: 'GraphQL, React.js, Gatsby.js, CSS Modules'
            },
            content: scorpioContent,
            screenshots: {
                preview: images.scorpioScreenshotsPreview.nodes.map(node => node.childImageSharp.gatsbyImageData),
                full: images.scorpioScreenshotsFull.nodes.map(node => node.childImageSharp.gatsbyImageData)
            }
        },
        {
            heading: 'Inboxroad',
            desc: 'SMTP relay provider',
            link: '/inboxroad',
            image: {
                preview: images.inboxroadPreview.childImageSharp.gatsbyImageData,
                full: images.inboxroadFull.childImageSharp.gatsbyImageData,
            },
            tags: ['php', 'wordpress', 'bootstrap'],
            data: {
                link: {
                    href: 'https://inboxroad.com/',
                    text: 'inboxroad.com'
                },
                services: 'WordPress Theme Development, WordPress Plugin Development, Frontend Development',
                features: 'Web Shop, User Management, Blog, Documentation, Newsletter',
                tech: 'PHP, WooCommerce, Bootstrap, jQuery'
            },
            content: inboxroadContent,
            screenshots: {
                preview: images.inboxroadScreenshotsPreview.nodes.map(node => node.childImageSharp.gatsbyImageData),
                full: images.inboxroadScreenshotsFull.nodes.map(node => node.childImageSharp.gatsbyImageData)
            }
        },
        {
            heading: 'buildwithhubs',
            desc: 'geodesic domes made simple',
            link: '/buildwithhubs',
            image: {
                preview: images.hubsPreview.childImageSharp.gatsbyImageData,
                full: images.hubsFull.childImageSharp.gatsbyImageData,
            },
            tags: ['php', 'jquery', 'css'],
            data: {
                link: {
                    href: 'https://buildwithhubs.co.uk/',
                    text: 'buildwithhubs.co.uk'
                },
                services: 'Backend Development, Frontend Development',
                features: 'Web Shop, SVG Manipulation, Newsletter',
                tech: 'PHP, jQuery, CSS'
            },
            content: hubsContent,
            screenshots: {
                preview: images.hubsScreenshotsPreview.nodes.map(node => node.childImageSharp.gatsbyImageData),
                full: images.hubsScreenshotsFull.nodes.map(node => node.childImageSharp.gatsbyImageData)
            }
        },
    ]);

    return projects;
    
}

export default Projects;