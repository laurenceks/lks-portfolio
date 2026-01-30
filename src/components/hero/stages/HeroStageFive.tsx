import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";
import HeroStageDiv from "./HeroStageDiv.tsx";
import { TypingHeroInterface } from "../../../types/heroTypes.ts";

const words = ["websites", "tools", "ideas", "solutions"];
const HeroStageFive = ({ nextHeroTypingStage }: TypingHeroInterface) => {
    const [i, setI] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            if (i >= words.length - 1) {
                nextHeroTypingStage();
            } else {
                setI((ind) => ind + 1);
            }
        }, 1000);
        return () => clearTimeout(intervalId);
    }, [i, nextHeroTypingStage]);
    return (
        <HeroStageDiv>
            <p className={"hero-tag"}>{"<hello> "}</p>
            <div className={"hero-main"}>
                I'm Laurence and I make{" "}
                <TextTransition springConfig={presets.stiff}>
                    <span className="index-module_type__E-SaG">
                        {words[i % words.length]}
                    </span>
                </TextTransition>
            </div>
            <p className={"hero-tag"}>{"</hello>"}</p>
        </HeroStageDiv>
    );
};

export default HeroStageFive;
