import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import "./layout.css"

type DataProps = {
    pageTitle: string,
    children: any
}

const Layout = ({ pageTitle, children } : DataProps) => {
    return (
        <div>
            <nav>
                <StaticImage className = "nav-img" src = "../images/oneRing.png" alt = "LOTR one ring"/>
                <h3>LOTR Campaign Wiki</h3>
                <div className = "links">
                    {pageTitle != "Home" && <Link to = "/">Home</Link>}
                    {pageTitle != "Calendar" && <Link to = "/">Calendar</Link>}
                    {pageTitle != "Wilderness" && <Link to = "/">Wilderness</Link>}
                    {pageTitle != "The Company" && <Link to = "/">The Company</Link>}
                    {pageTitle != "Link 4" && <Link to = "">Link 4</Link>}
                </div>
            </nav>
            {/* <button id = "toTopButton" title = "GoToTop" type = "button" onClick = toTop>Back to top</button> */}
            <main className = "container">
                <h1>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout;