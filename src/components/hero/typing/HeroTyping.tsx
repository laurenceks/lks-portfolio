import { ReactNode } from "react";
import HeroStageOne from "../stages/HeroStageOne.tsx";
import HeroStageTwo from "../stages/HeroStageTwo.tsx";
import HeroBackground from "../HeroBackground.tsx";
import HeroHidden from "../HeroHidden.tsx";
import HeroStageThree from "../stages/HeroStageThree.tsx";
import HeroStageFour from "../stages/HeroStageFour.tsx";
import { HeroTypingInterface } from "../../../types/heroTypes.ts";
import HeroStageDiv from "../stages/HeroStageDiv.tsx";

const HeroTyping = ({
    heroTypingStage,
    setHeroTypingStage,
}: HeroTypingInterface) => {
    const nextHeroTypingStage = () => {
        if (setHeroTypingStage) {
            setHeroTypingStage((currentStage: number) => currentStage + 1);
        }
    };

    const stageElements: { [key: number]: ReactNode } = {
        0: <HeroStageOne nextHeroTypingStage={nextHeroTypingStage} />,
        1: <HeroStageTwo nextHeroTypingStage={nextHeroTypingStage} />,
        2: <HeroStageThree nextHeroTypingStage={nextHeroTypingStage} />,
        3: <HeroStageThree nextHeroTypingStage={nextHeroTypingStage} />,
        4: <HeroStageFour />,
    };

    return (
        <div className={"hero-typing-container pt-md-5"}>
            <HeroStageDiv className="hero-typing">
                {stageElements[heroTypingStage]}
                <HeroHidden />
                <HeroBackground />
            </HeroStageDiv>
        </div>
    );
};
export default HeroTyping;
