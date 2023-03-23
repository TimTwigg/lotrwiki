import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"

const CompanyPage: React.FC<PageProps> = () => {
    return (
        <Layout title = "The Company">
            <div>
                <h1>The Company</h1>
                <hr/>
                <p>
                    The Company is a group of intrepid adventurers. They have not yet named themselves, and as such remain "The Company". Currently, the Company's members are, alphabetically:
                    Ingold, Luthais, Robinia, Saelrain, Théoryn Silvertongue, and Verlorener. <br/>
                    Past members include Vezenbaer. <br/>
                    More information to come.
                </p>
            </div>
        </Layout>
    )
}

export default CompanyPage;

export const Head: HeadFC = () => (
    <title>The Company</title>
);
