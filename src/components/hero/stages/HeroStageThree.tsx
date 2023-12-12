import { TypingHeroInterface } from "../../../types/heroTypes.ts";
import HeroTypingBodyName from "../typing/HeroTypingBodyName.tsx";
import HeroStageDiv from "./HeroStageDiv.tsx";

const HeroStageThree = ({ nextHeroTypingStage }: TypingHeroInterface) => (
    <HeroStageDiv>
        <p className={"hero-tag"}>{"<hello> "}</p>
        <p className={"hero-main"}>
            <HeroTypingBodyName nextHeroTypingStage={nextHeroTypingStage} />
        </p>
        <p className={"hero-tag"}>{"</hello>"}</p>
    </HeroStageDiv>
);

export default HeroStageThree;
