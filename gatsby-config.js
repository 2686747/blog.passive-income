module.exports = {
  siteMetadata: {
    title: "Passive income",
    siteUrl: "https://passive-income.today"
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {

        trackingIds: [
          "G-KHQ2DT756W"
        ],
        pluginConfig: {
          head: true,
        },
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
