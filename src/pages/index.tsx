import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"

const IndexPage: React.FC<PageProps> = () => {
    return (
        <Layout pageTitle = "Home">
            <div>
                <p>Test</p>
                <hr/>
                <p>Test 2</p>
            </div>
        </Layout>
    )
}

export default IndexPage;

export const Head: HeadFC = () => (
    <title>Home</title>
);
