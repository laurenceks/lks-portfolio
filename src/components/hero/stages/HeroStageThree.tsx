import { TypingHeroAndSetImageInterface } from "../../../types/heroTypes.ts";
import HeroTypingBodyName from "../typing/HeroTypingBodyName.tsx";
import HeroStageDiv from "./HeroStageDiv.tsx";

const HeroStageThree = ({
    nextHeroTypingStage,
    setShowImage,
}: TypingHeroAndSetImageInterface) => (
    <HeroStageDiv>
        <p className={"hero-tag"}>{"<hello> "}</p>
        <p className={"hero-main"}>
            <HeroTypingBodyName
                nextHeroTypingStage={nextHeroTypingStage}
                setShowImage={setShowImage}
            />
        </p>
        <p className={"hero-tag"}>{"</hello>"}</p>
    </HeroStageDiv>
);

export default HeroStageThree;
