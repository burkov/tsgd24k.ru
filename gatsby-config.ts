import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `TSGD24K2`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-typescript-css-modules",
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        resetCSS: true,
        isUsingColorMode: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `payments`,
        path: `${__dirname}/data/payments`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `finance`,
        path: `${__dirname}/data/finance`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: `${__dirname}/data/docs`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `general`,
        path: `${__dirname}/data/general`,
      },
    },
    "gatsby-transformer-remark",
    "gatsby-source-filesystem-markdown-name",
  ],
};

export default config;
