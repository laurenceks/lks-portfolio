import React, { useState } from "react";
import { useSpring } from "react-spring";
import NavBracketSVG from "../hero/NavBracketSVG.tsx";

const Nav = () => {
    const [bracketTranslation, setBracketTranslation] = useState({
        width: 0,
        translateX: 0,
    });
    const [{ stage }, setStage] = useSpring(() => ({
        stage: 0,
    }));
    const liMouseOver = (e: React.MouseEvent<HTMLLIElement>) => {
        setStage.start({ stage: 1 });
        setBracketTranslation({
            translateX: e.currentTarget.offsetLeft,
            width: e.currentTarget.offsetWidth,
        });
    };
    const liMouseOut = () => {
        setStage.start({ stage: 0 });
    };

    return (
        <nav>
            <img src={"logo.svg"} />
            <ul>
                <li onMouseEnter={liMouseOver} onMouseLeave={liMouseOut}>
                    Home
                </li>
                <li onMouseEnter={liMouseOver} onMouseLeave={liMouseOut}>
                    Portfolio
                </li>
                <li onMouseEnter={liMouseOver} onMouseLeave={liMouseOut}>
                    About
                </li>
                <li onMouseEnter={liMouseOver} onMouseLeave={liMouseOut}>
                    Contact
                </li>
                <li
                    className={"nav-marker"}
                    style={{
                        transform: `translateX(${bracketTranslation.translateX}px)`,
                        width: `${bracketTranslation.width}px`,
                    }}
                >
                    <NavBracketSVG stage={stage} />
                    <NavBracketSVG stage={stage} rotate={180} />
                </li>
            </ul>
            <div className={"nav-background"}></div>
        </nav>
    );
};

export default Nav;
