import React from "react"
import { Project } from "../types"

const voicedContent: React.ReactNode = (
  <>
    <p>
      VOICED is a platform that allows users to create and share stories and
      statuses. Its designed as social media app but its much more. It contains
      a lot of other features like showcase subscription and shop. It has both
      web and mobile versions. Web version was built with Next.js. App is
      available on App Store and Google Play and it was built with React Native
      and TypeScript.
    </p>
    <p>
      I was hired as a developer and after some time i was promoted to team
      lead. My responsibilities were to lead the team, manage the project, and i
      was working on around 7 different projects, including different apps,
      websites and admin panels. My work was focused on frontend part.
    </p>
    <p>
      App has lot of different functionalities including authentication and
      verification, account activation, profile creation, story and status
      creation, showcase subscription and shop.
    </p>
    <p>
      Mobile App is using Expo framework and it was my first time using it. I
      was using Expo modules for different functionalities like location,
      camera, gallery, etc.
    </p>
    <p>
      There are different product purchases in the app. Users can buy different
      subscriptions and products. I was responsible for the implementation of
      these purchases. Those features were built with RevenueCat for mobile and
      Stripe for web.
    </p>
  </>
)

const voicedMarketContent: React.ReactNode = (
  <>
    <p>
      VOICED Market is online marketplace where users can discover different
      deals and discounts. User can fill its preferences and get personalized
      deals and discounts.
    </p>
    <p>
      I was hired as a developer and after some time i was promoted to team
      lead. My responsibilities were to lead the team, manage the project, and i
      was working on around 7 different projects, including different apps,
      websites and admin panels. My work was focused on frontend part.
    </p>
    <p>
      Web app is connected to firebase for storage but we also have FastAPI
      backend.
    </p>
    <p>
      I was responsible for the implementation of the frontend part. I was using
      Next.js and TypeScript and SCSS Modules for styling.
    </p>
    <p></p>
  </>
)

const gridContent: React.ReactNode = (
  <>
    <p>
      GridZone is the Next-Gen art-focused gamified social experience on
      Ethereum with unique digital identities, and interactive 3D NFT ART.
      GridZone is a place where every social interaction is smart contract
      interaction.
    </p>
    <p>
      GridZone is my biggest project and work I'm most proud of. I started
      project from scratch, built everything, including server, database,
      backend and frontend. Now I lead team of people and we maintain this
      network. It was challenging to structure and maintain this codebase - its
      huge.
    </p>
    <p>
      I choose EC2 instance on AWS, where we host NGINX server. On that server I
      run Mongodb instance where data is stored. I use Mongoose as wrapper to
      Mongodb. It was hard to choose database at the start, the first choice was
      Postgre, but since data was changing frequently, we choose Mongo.
    </p>
    <p>
      Next, on the backend we choose Node.js - no question about it, its my
      favourite backend language. I choose express as a framework and the MVC as
      design pattern.
    </p>
    <p>
      Frontend was the most challenging part. App design is very complex. There
      are lots of features we use, and design is complex too. The client wanted
      to go with React. We choose Redux to store all business logic in its
      files. Next, all components are separated into 3 folders, folder with
      presentation components only, folder with components that are repeated
      across app and components that are on a specific page only. I was changing
      folders structure lot of times as app grew, but we stick to this structure
      by the time of writing. For styling part, I use SCSS, its big - we have
      thousands of scss files.
    </p>
    <p>
      One of the best things about this app is skin changing. Its like
      dark/light mode, but much advanced. Each skin has its own styles,
      background videos and other things. You can check app look with different
      skins on screenshots. It's awesome!
    </p>
  </>
)

const valudioContent: React.ReactNode = (
  <>
    <p>
      Valudio is software design and development studio from Barcelona. They
      needed website to highlight their business and they wanted it in JAM
      stack. The client wanted a site in Gatsby and to be able to edit data in
      Dato CMS.
    </p>
    <p>
      I got all designs ready and had the freedom to choose other technology.
    </p>
    <p>
      Designs are straightforward and I went with SCSS since Gatsby is
      supporting it very well. Feel of the site is ok, they are showcasing their
      works to clients, say a word or two about their team and have a contact
      page. I like the color combinations of this site much, black combinations
      are awesome.
    </p>
    <p>
      This is multi language website. It can be tricky sometimes with Gatsby.
      Lucky for me, Datmo CMS support for multi language is awesome. Client can
      easy change language in the backoffice of CMS, next all data is coming to
      Gatsby via the help of GraphQL. On frontend there is only 1 variable,
      which is changed based on user language. Based on that variable, different
      content is shown.
    </p>
    <p>Once again, good work and great site to help client boost business.</p>
  </>
)

const heataContent: React.ReactNode = (
  <>
    <p>
      Heata is innovative solution that will help people - its collecting heat
      from computers and transfer it into the water.
    </p>
    <p>
      They wanted me to build site for them which will showcase that product.
      Idea was developed in the UK. Responsibility was greater since everything
      is supported by British Gas.
    </p>
    <p>
      Designs were perfect - designed, documented and presented to me. All
      graphic was in SVG format. Client gave me freedom to choose technology as
      long it's going to be perfect. My decision was Gatsby, it was new
      technology for building static sites with React in that time. Innovative
      product - innovative technology.
    </p>
    <p>
      No much challenges on this site, since its only presenting product to
      users. But when it comes layouts, client demanded everything to be
      perfect. I used custom CSS without frameworks and SASS to make everything
      organized better. It was not easy work since i was returned by client few
      times because i missed someting in pixel or two. Everything needed to be
      pixel-perfect as on designs.
    </p>
    <p>
      At the end, project was completed successfully and site was launched. I
      hope heata will make it since it really innovative and will help people.
    </p>
  </>
)

const scorpioContent: React.ReactNode = (
  <>
    <p>
      Scorpio model management is a boutique agency founded in 2020. Its web app
      where potential models can apply for scouting.
    </p>
    <p>
      This app was challenging because there are multiple different technologies
      combined. At the start we were talking about tech stack - first choice was
      JAM stack app with headless CMS like Contentfull or Dato, but later we
      decided WordPress is best choice - since the client had hosting and
      experience in WordPress. Data is coming from WordPress backoffice and its
      fetched via GraphQL.
    </p>
    <p>
      On frontend, Gatsby is responsible for everything. I got design from the
      client, which was looking very good. My task was to transfer all designs
      to pixel-perfect layots. There were lots of similiar content and layouts
      so i decided to use CSS Modules on this project. Its awesome feature of
      Webpack and you don't need to think about class names when using it.
    </p>
    <p>
      Potential models can apply on site, and their data is going from app to
      client backoffice in WordPress. Also, client can add current models and
      their information in WordPress and all data is displayed on the website.
      Few of Gatsby plugins are used here - to display models Instagram
      pictures, get data from WordPress, add Google Analytics etc.
    </p>
  </>
)

const inboxroadContent: React.ReactNode = (
  <>
    <p>
      Inboxroad is email marketing company from Amsterdam. They are awesome guys
      and it was my pleasure to work with them.
    </p>
    <p>
      My job was to build a completly new website from scratch. Their only
      demand was to build it in WordPress. Since there were some custom plugins
      I decided it's best to build this as a WordPress theme in PHP. All data
      coming from backend is displayed on the template frontend with the help of
      WordPress functions. Most of the site is editable by client in WordPress
      admin.
    </p>
    <p>
      Inboxroad team had some demands about functionalities they needed - so i
      built few small plugins that help them function. Also pricing page was
      fully customizable with WooCommerce. At the time of writing, potential
      customers could choose from 4 different pricing plans with different
      variations.
    </p>
    <p>
      Site is responsive and works perfectly on all devices. I used SASS for
      styling and made everything organized. Also, I implemented Google
      Analytics and Google Tag Manager to track user behavior.
    </p>
    <p>
      Great project and great team to work with. Site is live and helping
      Inboxroad team to get more customers.
    </p>
  </>
)

const hubsContent: React.ReactNode = (
  <>
    <p>
      BuildWithHubs is a platform that helps developers build better software
      faster. It provides a collection of tools, templates, and resources to
      streamline the development process.
    </p>
    <p>
      This project was built with modern web technologies and focuses on
      providing a great developer experience. The platform includes various
      tools and utilities that developers can use to accelerate their workflow.
    </p>
    <p>
      The site features a clean, modern design with intuitive navigation and
      responsive layout. It's built with performance and accessibility in mind,
      ensuring a smooth experience across all devices.
    </p>
  </>
)

export const projectsData: Project[] = [
  {
    heading: "VOICED",
    data: {
      role: "Team Lead for web and mobile apps",
      client: "VOICEDMedia",
      date: "2023 - Present",
      tech: "React Native, TypeScript, RevenueCat, Next.js, Stripe",
    },
    image: {
      preview: "/images/screenshots/voiced/og.png",
      full: "/images/screenshots/voiced/og.png",
    },
    content: voicedContent,
    screenshots: {
      preview: [
        "/images/screenshots/voiced/mobile-1.png",
        "/images/screenshots/voiced/mobile-2.png",
        "/images/screenshots/voiced/mobile-3.png",
        "/images/screenshots/voiced/mobile-4.png",
        "/images/screenshots/voiced/mobile-5.png",
      ],
      full: [
        "/images/screenshots/voiced/mobile-1.png",
        "/images/screenshots/voiced/mobile-2.png",
        "/images/screenshots/voiced/mobile-3.png",
        "/images/screenshots/voiced/mobile-4.png",
        "/images/screenshots/voiced/mobile-5.png",
      ],
    },
  },
  {
    heading: "VOICED Market",
    data: {
      role: "Frontend Lead Developer",
      client: "VOICEDMedia",
      date: "2022 - Present",
      tech: "Next.js, TypeScript, Stripe, Firebase, SCSS Modules",
    },
    image: {
      preview: "/images/screenshots/voicedmarket/og.png",
      full: "/images/screenshots/voicedmarket/og.png",
    },
    content: voicedMarketContent,
    screenshots: {
      preview: [
        "/images/screenshots/voicedmarket/1.png",
        "/images/screenshots/voicedmarket/2.png",
        "/images/screenshots/voicedmarket/3.png",
        "/images/screenshots/voicedmarket/4.png",
      ],
      full: [
        "/images/screenshots/voicedmarket/1.png",
        "/images/screenshots/voicedmarket/2.png",
        "/images/screenshots/voicedmarket/3.png",
        "/images/screenshots/voicedmarket/4.png",
      ],
    },
  },
  {
    heading: "GridZone",
    data: {
      role: "Full Stack Developer",
      client: "GridZone",
      date: "2021 - Present",
      tech: "React, TypeScript, Redux, Node.js, MongoDB, AWS, SCSS",
    },
    image: {
      preview: "/images/grid.png",
      full: "/images/grid.png",
    },
    content: gridContent,
    screenshots: {
      preview: [
        "/images/screenshots/grid/1.png",
        "/images/screenshots/grid/2.png",
        "/images/screenshots/grid/3.png",
        "/images/screenshots/grid/4.png",
        "/images/screenshots/grid/5.png",
        "/images/screenshots/grid/6.png",
      ],
      full: [
        "/images/screenshots/grid/1.png",
        "/images/screenshots/grid/2.png",
        "/images/screenshots/grid/3.png",
        "/images/screenshots/grid/4.png",
        "/images/screenshots/grid/5.png",
        "/images/screenshots/grid/6.png",
      ],
    },
  },
  {
    heading: "Valudio",
    data: {
      role: "JAM Stack Developer",
      client: "Valudio",
      date: "2020",
      tech: "Gatsby, GraphQL, DatoCMS, SCSS",
    },
    image: {
      preview: "/images/valudio.jpg",
      full: "/images/valudio.jpg",
    },
    content: valudioContent,
    screenshots: {
      preview: [
        "/images/screenshots/valudio/1.png",
        "/images/screenshots/valudio/2.png",
        "/images/screenshots/valudio/3.png",
        "/images/screenshots/valudio/4.png",
      ],
      full: [
        "/images/screenshots/valudio/1.png",
        "/images/screenshots/valudio/2.png",
        "/images/screenshots/valudio/3.png",
        "/images/screenshots/valudio/4.png",
      ],
    },
  },
  {
    heading: "Heata",
    data: {
      role: "Frontend Developer",
      client: "Heata",
      date: "2020",
      tech: "Gatsby, SCSS, SVG",
    },
    image: {
      preview: "/images/heata.jpg",
      full: "/images/heata.jpg",
    },
    content: heataContent,
    screenshots: {
      preview: [
        "/images/screenshots/heata/1.png",
        "/images/screenshots/heata/2.png",
        "/images/screenshots/heata/3.png",
        "/images/screenshots/heata/4.png",
      ],
      full: [
        "/images/screenshots/heata/1.png",
        "/images/screenshots/heata/2.png",
        "/images/screenshots/heata/3.png",
        "/images/screenshots/heata/4.png",
      ],
    },
  },
  {
    heading: "Scorpio",
    data: {
      role: "Frontend Developer",
      client: "Scorpio Model Management",
      date: "2020",
      tech: "Gatsby, WordPress, GraphQL, CSS Modules",
    },
    image: {
      preview: "/images/scorpio.jpg",
      full: "/images/scorpio.jpg",
    },
    content: scorpioContent,
    screenshots: {
      preview: [
        "/images/screenshots/scorpio/1.png",
        "/images/screenshots/scorpio/2.png",
        "/images/screenshots/scorpio/3.png",
        "/images/screenshots/scorpio/4.png",
      ],
      full: [
        "/images/screenshots/scorpio/1.png",
        "/images/screenshots/scorpio/2.png",
        "/images/screenshots/scorpio/3.png",
        "/images/screenshots/scorpio/4.png",
      ],
    },
  },
  {
    heading: "Inboxroad",
    data: {
      role: "Full Stack Developer",
      client: "Inboxroad",
      date: "2019",
      tech: "WordPress, PHP, WooCommerce, SCSS",
    },
    image: {
      preview: "/images/inboxroad.jpg",
      full: "/images/inboxroad.jpg",
    },
    content: inboxroadContent,
    screenshots: {
      preview: [
        "/images/screenshots/inboxroad/1.png",
        "/images/screenshots/inboxroad/2.png",
        "/images/screenshots/inboxroad/3.png",
        "/images/screenshots/inboxroad/4.png",
      ],
      full: [
        "/images/screenshots/inboxroad/1.png",
        "/images/screenshots/inboxroad/2.png",
        "/images/screenshots/inboxroad/3.png",
        "/images/screenshots/inboxroad/4.png",
      ],
    },
  },
  {
    heading: "BuildWithHubs",
    data: {
      role: "Full Stack Developer",
      client: "BuildWithHubs",
      date: "2021",
      tech: "Next.js, TypeScript, Tailwind CSS",
    },
    image: {
      preview: "/images/hubs.jpg",
      full: "/images/hubs.jpg",
    },
    content: hubsContent,
    screenshots: {
      preview: [
        "/images/screenshots/hubs/1.png",
        "/images/screenshots/hubs/2.png",
        "/images/screenshots/hubs/3.png",
        "/images/screenshots/hubs/4.png",
      ],
      full: [
        "/images/screenshots/hubs/1.png",
        "/images/screenshots/hubs/2.png",
        "/images/screenshots/hubs/3.png",
        "/images/screenshots/hubs/4.png",
      ],
    },
  },
]

// Export a function to get projects (for backward compatibility if needed)
export const getProjects = (): Project[] => {
  return projectsData
}
