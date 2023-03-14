import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"

const HomePage: React.FC<PageProps> = () => {
    return (
        <Layout title = "Home">
            <div>
                <h1>Welcome to Middle Earth</h1>
                <hr/>
                <p>
                    Middle Earth is history's most complex and meticulously created fantasy world. Where better to play some D&D?
                    <br/>
                    This wiki explains some general lore, provides some utilities for understanding Middle Earth, and chronicles the 
                    adventures of a certain as-yet-unnamed group of adventurers.
                </p>
            </div>
        </Layout>
    )
}

export default HomePage;

export const Head: HeadFC = () => (
    <title>Home</title>
);
