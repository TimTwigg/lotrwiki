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
                <ImgNavLink img = {<StaticImage src = "./../assets/event.png" alt = ""/>} url = "/calendar" title = "Calendar"/>
                <ImgNavLink img = {<StaticImage src = "./../assets/weather.png" alt = ""/>} url = "/weather" title = "Weather"/>
                <ImgNavLink img = {<StaticImage src = "./../assets/tablets.png" alt = ""/>} url = "/rules" title = "Rules"/>
                <ImgNavLink img = {<StaticImage src = "./../assets/helmet.png" alt = ""/>} url = "/company" title = "Company"/>
                <ImgNavLink img = {<StaticImage src = "./../assets/map.png" alt = ""/>} url = "/maps" title = "Maps"/>
                <ImgNavLink img = {<StaticImage src = "./../assets/bottle.png" alt = ""/>} url = "/apothecary" title = "Apothecary"/>
                <ImgNavLink img = {<StaticImage src = "./../assets/contact-mail.png" alt = ""/>} url = "/contact" title = "Contact"/>
            </ImgNav>

            <hr/>
            <p>
                Icons created by Freepik - <a href = "https://www.flaticon.com/" target = "_blank">Flaticon</a>
            </p>
        </Layout>
    )
}

export default IndexPage;

export const Head: HeadFC = () => <title>LOTRWiki</title>;
