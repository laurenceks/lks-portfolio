import HeroStageDiv from "./HeroStageDiv.tsx";
import { TypingHeroInterface } from "../../../types/heroTypes.ts";
import HeroTypingBodyMiddle from "../typing/HeroTypingBodyMiddle.tsx";

const HeroStageFour = ({ nextHeroTypingStage }: TypingHeroInterface) => (
    <HeroStageDiv>
        <p className={"hero-tag"}>{"<hello> "}</p>
        <p className={"hero-main"}>
            <HeroTypingBodyMiddle nextHeroTypingStage={nextHeroTypingStage} />
        </p>
        <p className={"hero-tag"}>{"</hello>"}</p>
    </HeroStageDiv>
);

export default HeroStageFour;
