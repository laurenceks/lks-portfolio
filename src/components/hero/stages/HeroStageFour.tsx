import HeroTypingBodyLoop from "../typing/HeroTypingBodyLoop.tsx";
import HeroStageDiv from "./HeroStageDiv.tsx";

const HeroStageThree = () => (
    <HeroStageDiv>
        <p className={"hero-tag"}>{"<hello> "}</p>
        <p className={"hero-main"}>
            <HeroTypingBodyLoop />
        </p>
        <p className={"hero-tag"}>{"</hello>"}</p>
    </HeroStageDiv>
);

export default HeroStageThree;
