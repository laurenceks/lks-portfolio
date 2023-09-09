import HeroTypingOpenTag from "../HeroTypingTagOpen.tsx";
import HeroTypingTagClose from "../HeroTypingTagClose.tsx";
import { TypingHeroStartProps } from "../../../types/heroTypes.ts";

const HeroStageOne = ({ nextHeroTypingStage }: TypingHeroStartProps) => (
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
