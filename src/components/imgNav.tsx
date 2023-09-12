import * as React from "react";
import { Link } from "gatsby";
import "./../styling/imgNav.scss";

type ImgNavLinkProps = {
    img: any,
    url: string
}

const ImgNavLink = ({ img, url } : ImgNavLinkProps) => {
    return (
        <div className = "imgnavlink">
            <Link to = {url}>
                {img}
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