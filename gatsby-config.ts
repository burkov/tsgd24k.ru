import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  siteMetadata: {
    title: `TSGD24K2`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-plugin-typescript-css-modules',
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        resetCSS: true,
        isUsingColorMode: true,
      },
    },
  ],
}

export default config
