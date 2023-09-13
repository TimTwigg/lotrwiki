import * as React from "react";
import { Link } from "gatsby";
import "./../styling/imgNav.scss";

type ImgNavLinkProps = {
    img: any,
    url: string,
    title: string
}

const ImgNavLink = ({ img, url, title } : ImgNavLinkProps) => {
    return (
        <div className = "imgnavlink">
            <Link to = {url}>
                {img}
                <span className = "tooltip">{title}</span>
            </Link>
        </div>
    );
}
type ImgNavProps = {
    children: any
}

const ImgNav = ({ children } : ImgNavProps) => {
    return (
        <div className = "imgnav ten columns offset-by-one column">
            {children}
        </div>
    );
}

export {
    ImgNavLink,
    ImgNav
}