module.exports = {
    siteMetadata: {
      title: `Đorđe Kuzmanović`,
      description: `Full-Stack Software Developer. Expert in JavaScript, React and Node.js. `,
      author: `Đorđe Kuzmanović`,
    },
    plugins: [
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-image`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images`,
        },
      },
      `gatsby-plugin-sass`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      `gatsby-plugin-anchor-links`,
      `gatsby-plugin-transition-link`,
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `gatsby-starter-default`,
          short_name: `starter`,
          start_url: `/`,
          background_color: `#2C2C2C`,
          theme_color: `#2C2C2C`,
          display: `minimal-ui`,
          icon: `src/images/icon.png`, // This path is relative to the root of the site.
        },
      },
      `gatsby-plugin-gatsby-cloud`,
      // this (optional) plugin enables Progressive Web App + Offline functionality
      // To learn more, visit: https://gatsby.dev/offline
      // `gatsby-plugin-offline`,
      {
        resolve: `gatsby-plugin-gtag`,
        options: {
          // your google analytics tracking id
          trackingId: `G-R59YDCPLJ4`,
          // Puts tracking script in the head instead of the body
          head: true,
          // enable ip anonymization
          anonymize: true,
        },
      }
    ],
  }
  