import { MouseEvent, useState } from "react";
import { useSpring } from "react-spring";
import NavBracketSVG from "../hero/NavBracketSVG.tsx";

interface LiMouseOverInterface {
    touchedOnce: boolean;
    touchedTwice: boolean;
    translateX: number;
    width: number;
}
const Nav = () => {
    const [bracketTranslation, setBracketTranslation] =
        useState<LiMouseOverInterface>({
            touchedOnce: false,
            touchedTwice: false,
            width: 0,
            translateX: 0,
        });
    const [{ stage }, setStage] = useSpring(() => ({
        stage: 0,
    }));
    const liMouseOver = (e: MouseEvent<HTMLLIElement>) => {
        setStage.start({ stage: 1 });
        // store values now to avoid reference of e.currentTarget expiring when state update runs
        const { offsetLeft, offsetWidth } = e.currentTarget;
        setBracketTranslation((prevState) => ({
            touchedOnce: true,
            touchedTwice: prevState.touchedOnce,
            translateX: offsetLeft,
            width: offsetWidth,
        }));
    };
    const liMouseOut = () => {
        setStage.start({ stage: 0 });
    };

    return (
        <nav>
            <img src={"logo.svg"} alt={"Laurence Summers Web Development"} />
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
                    className={`nav-marker ${
                        bracketTranslation.touchedTwice ? "" : "no-transition"
                    }`}
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
