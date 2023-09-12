import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import { ImgNav, ImgNavLink } from "../components/imgNav";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage: React.FC<PageProps> = () => {
    return (
        <Layout title = "         ">
            <div>
                <h1>Welcome to Middle Earth</h1>
                <hr/>
                <p>
                    Middle Earth is history's most complex and meticulously created fantasy world. Where better to play some D&D?
                    <br/>
                    This wiki explains some homebrew table rules, provides some utilities for understanding Middle Earth, and chronicles the 
                    adventures of The Company.
                </p>
            </div>
            <hr/>

            <ImgNav>
                <ImgNavLink img = {<StaticImage src = "./../assets/event.png" alt = "" title = "Calendar"/>} url = "/calendar"/>
                <ImgNavLink img = {<StaticImage src = "./../assets/weather.png" alt = "" title = "Weather"/>} url = "/weather" />
                <ImgNavLink img = {<StaticImage src = "./../assets/tablets.png" alt = "" title = "Rules"/>} url = "/rules"/>
                <ImgNavLink img = {<StaticImage src = "./../assets/helmet.png" alt = "" title = "Company"/>} url = "/company"/>
                <ImgNavLink img = {<StaticImage src = "./../assets/map.png" alt = "" title = "Maps"/>} url = "/maps"/>
                <ImgNavLink img = {<StaticImage src = "./../assets/contact-mail.png" alt = "" title = "Contact"/>} url = "/contact"/>
            </ImgNav>

            <hr/>
            <p>
                Icons created by Freepik - <a href = "https://www.flaticon.com/" target = "_blank">Flaticon</a>
            </p>
        </Layout>
    )
}

export default IndexPage;

export const Head: HeadFC = () => (
    <title>Home</title>
);
