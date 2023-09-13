import { TypingHeroInterface } from "../../../types/heroTypes.ts";
import HeroTypingBodyName from "../HeroTypingBodyName.tsx";

const HeroStageThree = ({ nextHeroTypingStage }: TypingHeroInterface) => (
    <div>
        <p className={"hero-tag"}>{"<hello> "}</p>
        <p className={"hero-main"}>
            <HeroTypingBodyName nextHeroTypingStage={nextHeroTypingStage} />
        </p>
        <p className={"hero-tag"}>{"</hello>"}</p>
    </div>
);

export default HeroStageThree;
