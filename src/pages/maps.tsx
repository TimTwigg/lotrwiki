import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { AnchorLinkBar } from "../components/linkBar";

const MapsPage: React.FC<PageProps> = () => {
    return (
        <Layout title = "Maps">
            <h1>Maps</h1>
            <p>
                Maps created with Inkarnate.
            </p>
            <AnchorLinkBar hideWhenSmall = {true} pageTitle = "Maps" links = {[
                { name: "Vales of Anduin", url: "/maps#valesOfAnduin" }
            ]}/>
            <hr/>

            <h3 id = "valesOfAnduin">Vales of Anduin</h3>
            <div className = "ten columns offset-by-one column">
                <Zoom>
                    <StaticImage imgStyle = {{height: "100%", width: "100%"}} src = "../assets/valesOfAnduinMap.jpg" alt = "Map of the Vales of Anduin"/>
                </Zoom>
            </div>
            
            <div className = "double spacer"/>
        </Layout>
    )
}

export default MapsPage;

export const Head: HeadFC = () => (
    <title>Maps</title>
);
