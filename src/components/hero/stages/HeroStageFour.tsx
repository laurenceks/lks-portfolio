import HeroTypingBodyLoop from "../HeroTypingBodyLoop.tsx";

const HeroStageThree = () => (
    <div>
        <p className={"hero-tag"}>{"<hello> "}</p>
        <p className={"hero-main"}>
            <HeroTypingBodyLoop />
        </p>
        <p className={"hero-tag"}>{"</hello>"}</p>
    </div>
);

export default HeroStageThree;
