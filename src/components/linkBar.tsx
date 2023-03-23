import * as React from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./../styling/linkBar.scss";

type LinkBarProps = {
    hideWhenSmall:boolean,
    pageTitle: string,
    links: {name:string, url:string}[]
}

function changeLinkBar(pageTitle: string) {
    (document.getElementById(pageTitle + "-div") as HTMLDivElement).classList.toggle("open");
}

const LinkBar = ({ hideWhenSmall, pageTitle, links } : LinkBarProps) => {
    return (
        <div className = {"links bordered" + (hideWhenSmall ? " hideWhenSmall" : "")} id = {pageTitle + "-div"}>
            {
                links.filter((l, i) => l.name != pageTitle).map((l, i) => <Link key = {l.name} to = {l.url}>{l.name}</Link>)
            }
            {hideWhenSmall && <span key = "icon" className = "icon" onClick = {() => {changeLinkBar(pageTitle)}}><FontAwesomeIcon icon = {faBars}/></span>}
        </div>
    );
}

const AnchorLinkBar = ({ hideWhenSmall, pageTitle, links } : LinkBarProps) => {
    return (
        <div className = {"anchorbar links curvedBorder" + (hideWhenSmall ? " hideWhenSmall" : "")}>
            {
                links.filter((l, i) => l.name != pageTitle).map((l, i) => <AnchorLink key = {l.name} to = {l.url}>{l.name}</AnchorLink>)
            }
        </div>
    );
}

export {
    LinkBar,
    AnchorLinkBar
}