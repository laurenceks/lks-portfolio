import HeroTypingOpenTag from "../HeroTypingTagOpen.tsx";
import HeroTypingTagClose from "../HeroTypingTagClose.tsx";
import { TypingHeroInterface } from "../../../types/heroTypes.ts";

const HeroStageOne = ({ nextHeroTypingStage }: TypingHeroInterface) => (
    <div>
        <p className="hero-tag">
            <HeroTypingOpenTag nextHeroTypingStage={nextHeroTypingStage} />
        </p>
        <p className="hero-tag">
            <HeroTypingTagClose />
        </p>
    </div>
);

export default HeroStageOne;
