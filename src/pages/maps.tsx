import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Zoom from "react-medium-image-zoom";
import { AnchorLinkBar } from "../components/linkBar";
import "react-medium-image-zoom/dist/styles.css";

const MapsPage: React.FC<PageProps> = () => {
    return (
        <Layout title = "           ">
            <h1>Maps</h1>
            <AnchorLinkBar hideWhenSmall = {true} links = {[
                { name: "Middle Earth", url: "/maps#middleEarth" },
                { name: "Vales of Anduin", url: "/maps#valesOfAnduin" }
            ]}/>
            <hr/>

            <h3 id = "middleEarth">Middle Earth</h3>
            <p>
                Map created on DeviantArt by <a href = "https://www.deviantart.com/caeora" target = "_blank">Caeora</a>.
            </p>
            <div className = "ten columns offset-by-one column">
                <Zoom>
                    <StaticImage imgStyle={{height: "100%", width: "100%"}} src = "../assets/middleEarthMap.jpg" alt = "Map of Middle Earth"/>
                </Zoom>
            </div>
            <div className = "spacer"/>
            <hr/>

            <h3 id = "valesOfAnduin">Vales of Anduin</h3>
            <p>
                Map created with Inkarnate by me.
            </p>
            <div className = "ten columns offset-by-one column">
                <Zoom>
                    <StaticImage imgStyle = {{height: "100%", width: "100%"}} src = "../assets/valesOfAnduinMap.jpg" alt = "Map of the Vales of Anduin"/>
                </Zoom>
            </div>
            
            <div className = "double spacer"/>
            <div className = "double spacer"/>
        </Layout>
    )
}

export default MapsPage;

export const Head: HeadFC = () => <title>LOTRWiki | Maps</title>;