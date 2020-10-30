/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [`gatsby-plugin-styled-components`,
  {
    resolve: `gatsby-plugin-material-ui`,
    options: {
      stylesProvider: {
        injectFirst: true,
      },
    },
  },
  'gatsby-plugin-sass'
],
}
