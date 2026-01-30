import { ReactNode } from "react";
import HeroStageOne from "../stages/HeroStageOne.tsx";
import HeroStageTwo from "../stages/HeroStageTwo.tsx";
import HeroBackground from "../HeroBackground.tsx";
import HeroHidden from "../HeroHidden.tsx";
import HeroStageThree from "../stages/HeroStageThree.tsx";
import HeroStageFour from "../stages/HeroStageFour.tsx";
import { HeroTypingInterface } from "../../../types/heroTypes.ts";
import HeroStageDiv from "../stages/HeroStageDiv.tsx";
import HeroStageFive from "../stages/HeroStageFive.tsx";
import HeroStageSix from "../stages/HeroStageSix.tsx";

const HeroTyping = ({
    heroTypingStage,
    setHeroTypingStage,
    setShowImage,
}: HeroTypingInterface) => {
    const nextHeroTypingStage = () => {
        if (setHeroTypingStage) {
            setHeroTypingStage((currentStage: number) => currentStage + 1);
        }
    };

    const stageElements: { [key: number]: ReactNode } = {
        0: <HeroStageOne nextHeroTypingStage={nextHeroTypingStage} />,
        1: <HeroStageTwo nextHeroTypingStage={nextHeroTypingStage} />,
        2: (
            <HeroStageThree
                nextHeroTypingStage={nextHeroTypingStage}
                setShowImage={setShowImage}
            />
        ),
        3: <HeroStageFour nextHeroTypingStage={nextHeroTypingStage} />,
        4: <HeroStageFive nextHeroTypingStage={nextHeroTypingStage} />,
        5: <HeroStageSix />,
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
