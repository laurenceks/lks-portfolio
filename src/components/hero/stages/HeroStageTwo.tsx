import HeroTypingBodyOpen from "../typing/HeroTypingBodyOpen.tsx";
import { TypingHeroInterface } from "../../../types/heroTypes.ts";
import HeroStageDiv from "./HeroStageDiv.tsx";

const HeroStageTwo = ({ nextHeroTypingStage }: TypingHeroInterface) => (
    <HeroStageDiv>
        <p className={"hero-tag"}>{"<hello> "}</p>
        <p className={"hero-main"}>
            <HeroTypingBodyOpen nextHeroTypingStage={nextHeroTypingStage} />
        </p>
        <p className={"hero-tag"}>{"</hello>"}</p>
    </HeroStageDiv>
);

export default HeroStageTwo;
