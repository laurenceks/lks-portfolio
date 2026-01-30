import HeroStageDiv from "./HeroStageDiv.tsx";
import HeroTypingBodyEnd from "../typing/HeroTypingBodyEnd.tsx";

const HeroStageSix = () => (
    <HeroStageDiv>
        <p className={"hero-tag"}>{"<hello> "}</p>
        <p className={"hero-main"}>
            <HeroTypingBodyEnd />
        </p>
        <p className={"hero-tag"}>{"</hello>"}</p>
    </HeroStageDiv>
);

export default HeroStageSix;
