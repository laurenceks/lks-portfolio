import HeroStageOne from "./stages/HeroStageOne.tsx";
import HeroStageTwo from "./stages/HeroStageTwo.tsx";
import HeroBackground from "./HeroBackground.tsx";
import HeroHidden from "./HeroHidden.tsx";
import HeroStageThree from "./stages/HeroStageThree.tsx";
import HeroStageFour from "./stages/HeroStageFour.tsx";
import { HeroProps } from "../../types/heroTypes.ts";

const HeroTyping = ({ heroTypingStage, setHeroTypingStage }: HeroProps) => {
    const nextHeroTypingStage = () => {
        setHeroTypingStage((currentStage: number) => currentStage + 1);
    };

    const stageElements = [
        <HeroStageOne nextHeroTypingStage={nextHeroTypingStage} />,
        <HeroStageTwo nextHeroTypingStage={nextHeroTypingStage} />,
        <HeroStageThree nextHeroTypingStage={nextHeroTypingStage} />,
        <HeroStageFour />,
    ];

    return (
        <div className={"hero-typing-container"}>
            <div className={"hero-typing"}>
                {stageElements[heroTypingStage]}
                <HeroHidden />
                <HeroBackground />
            </div>
        </div>
    );
};
export default HeroTyping;
