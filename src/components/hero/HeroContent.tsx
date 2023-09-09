import { useState } from "react";
import HeroTyping from "./HeroTyping.tsx";
import HeroCTA from "./HeroCTA.tsx";

const HeroContent = ({ learnMoreRef }) => {
    const [heroStage, setHeroStage] = useState(0);

    return (
        <div className={"hero-content"}>
            <HeroTyping
                heroTypingStage={heroStage}
                setHeroTypingStage={setHeroStage}
            />
            <HeroCTA heroTypingStage={heroStage} learnMoreRef={learnMoreRef} />
        </div>
    );
};
export default HeroContent;
