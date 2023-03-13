import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import "./layout.css"

type DataProps = {
    title: string,
    children: any
}

const Layout = ({ title, children } : DataProps) => {
    React.useEffect(() => {
        document.addEventListener("scroll", _ => {
            let mybutton = document.getElementById("toTopButton")!;
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
        });
    });

    return (
        <div className = "pageDiv">
            <nav>
                <StaticImage className = "nav-img" src = "../images/oneRingIcon.png" alt = "LOTR one ring"/>
                <h3>LOTR Campaign Wiki</h3>
                <div className = "links">
                    {title != "Home" && <Link to = "/">Home</Link>}
                    {title != "Calendar" && <Link to = "/calendar">Calendar</Link>}
                    {title != "Wilderness" && <Link to = "/">Wilderness</Link>}
                    {title != "The Company" && <Link to = "/">The Company</Link>}
                    {title != "Link 4" && <Link to = "">Link 4</Link>}
                </div>
            </nav>
            <button id = "toTopButton" title = "GoToTop" type = "button" onClick = {() => window.scrollTo(0, 0)}>Back to top</button>
            <main className = "container">
                {children}
            </main>
            <div className = "double spacer"></div>
            <footer>
                Disclaimer: Middle Earth Lore contained on this wiki is a mix of Tolkien's canon and my own invention. This site is meant for private use only
                and is not intended to serve as an official reference.
            </footer>
            <div className = "footer spacer"></div>
        </div>
    )
}

export default Layout;