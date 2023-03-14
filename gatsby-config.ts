import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
    pathPrefix: "/lotrwiki",
    siteMetadata: {
        siteUrl: "https://timtwigg.github.io/lotrwiki"
    },
    graphqlTypegen: true,
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                start_url: ".",
                icon: "src/images/oneRingIcon.png",
                display: "standalone"
            }
        },
        "gatsby-plugin-anchor-links",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: `${__dirname}/src/pages`
            }
        }
    ]
}

export default config
