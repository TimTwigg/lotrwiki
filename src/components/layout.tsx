import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { LinkBar } from "./linkBar";
import "./../styling/normalize.scss";
import "./../styling/main.scss";

type DataProps = {
    title: string,
    children: any
}

const Layout = ({ title, children } : DataProps) => {
    React.useEffect(() => {
        document.addEventListener("scroll", _ => {
            if (window.innerWidth > 550) {
                let mybutton = document.getElementById("toTopButton")!;
                if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                    mybutton.classList.remove("hidden");
                } else {
                    mybutton.classList.add("hidden");
                }
            }
        });
    });

    return (
        <div className = "pageDiv">
            <nav>
                <StaticImage className = "nav-img" src = "../assets/oneRingIcon.png" alt = "LOTR one ring"/>
                <h3>LOTR Campaign Wiki</h3>
                <LinkBar hideWhenSmall = {true} pageTitle = {title} links = {[
                    { name: "Home", url: "/" },
                    { name: "Calendar", url: "/calendar" },
                    { name: "Weather", url: "/weather" },
                    { name: "Rules", url: "/rules" },
                    { name: "The Company", url: "/company" },
                    { name: "Contact Me", url: "/contact" }
                ]}/>
            </nav>
            <button id = "toTopButton" className = "hidden" title = "GoToTop" type = "button" onClick = {() => window.scrollTo(0, 0)}>Back to top</button>
            <main className = "container">
                {children}
            </main>
            <div className = "double spacer"/>
            <footer>
                Disclaimer: Middle Earth Lore contained on this wiki is a mix of Tolkien's canon and my own invention. This site is meant for private use only
                and is not intended to serve as an official reference. This page last updated April 2023.
            </footer>
            <div className = "footer spacer"/>
        </div>
    )
}

export default Layout;