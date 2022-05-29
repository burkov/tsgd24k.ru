import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `TSGD24K2`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
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
        name: `orders`,
        path: `${__dirname}/data/orders`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `news`,
        path: `${__dirname}/data/news`,
      },
    },
    "gatsby-transformer-remark",
    "gatsby-source-filesystem-markdown-name",
    "gatsby-plugin-react-helmet",
  ],
};

export default config;
