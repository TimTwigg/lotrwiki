import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
    siteMetadata: {
        siteUrl: "https://timtwigg.github.io/lotrwiki",
    },
    graphqlTypegen: true,
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "src/images/oneRingIcon.png"
            }
        },
        "gatsby-plugin-anchor-links",
        "gatsby-plugin-sharp",
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
