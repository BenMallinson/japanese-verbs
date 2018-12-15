module.exports = {
  siteMetadata: {
    title: 'Japanese Verbs',
    author: 'Ben Mallinson',
    description: 'A tool to help users learn basic Japanese verbs.',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
  {
    resolve: `gatsby-plugin-sass`,
    options: {
      includePaths: ["src/sass"],
    },
  },
],
}
