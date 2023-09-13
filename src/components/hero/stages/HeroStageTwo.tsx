import HeroTypingBodyOpen from "../HeroTypingBodyOpen.tsx";
import { TypingHeroInterface } from "../../../types/heroTypes.ts";

const HeroStageTwo = ({ nextHeroTypingStage }: TypingHeroInterface) => (
    <div>
        <p className={"hero-tag"}>{"<hello> "}</p>
        <p className={"hero-main"}>
            <HeroTypingBodyOpen nextHeroTypingStage={nextHeroTypingStage} />
        </p>
        <p className={"hero-tag"}>{"</hello>"}</p>
    </div>
);

export default HeroStageTwo;
