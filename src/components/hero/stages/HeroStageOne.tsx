import HeroTypingOpenTag from "../typing/HeroTypingTagOpen.tsx";
import HeroTypingTagClose from "../typing/HeroTypingTagClose.tsx";
import { TypingHeroInterface } from "../../../types/heroTypes.ts";
import HeroStageDiv from "./HeroStageDiv.tsx";

const HeroStageOne = ({ nextHeroTypingStage }: TypingHeroInterface) => (
    <HeroStageDiv>
        <p className="hero-tag">
            <HeroTypingOpenTag nextHeroTypingStage={nextHeroTypingStage} />
        </p>
        <p className="hero-tag">
            <HeroTypingTagClose />
        </p>
    </HeroStageDiv>
);

export default HeroStageOne;
