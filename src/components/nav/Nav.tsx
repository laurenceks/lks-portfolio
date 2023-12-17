import { MouseEvent, useState } from "react";
import { useSpring } from "react-spring";
import NavBracketSVG from "./NavBracketSVG.tsx";
import { ScrollIntoViewRefType } from "../../types/heroTypes.ts";

interface LiMouseOverInterface {
    touchedOnce: boolean;
    touchedTwice: boolean;
    translateX: number;
    width: number;
}
const Nav = ({ refs }: { refs: ScrollIntoViewRefType[] }) => {
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

    const labels = ["About", "Portfolio", "Contact"];

    return (
        <nav>
            <img src={"logo.svg"} alt={"Laurence Summers Web Development"} />
            <ul>
                {labels.map((label, i) => (
                    <li
                        key={`nav-li-${label}`}
                        onMouseEnter={liMouseOver}
                        onMouseLeave={liMouseOut}
                        onClick={() => refs[i].current?.scrollIntoView()}
                    >
                        {label}
                    </li>
                ))}
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
