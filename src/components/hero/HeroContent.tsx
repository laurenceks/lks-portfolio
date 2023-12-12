import { useState } from "react";
import HeroTyping from "./typing/HeroTyping.tsx";
import HeroCTA from "./HeroCTA.tsx";
import HeroImage from "./HeroImage.tsx";
import { ScrollIntoViewRefType } from "../../types/heroTypes.ts";

const HeroContent = ({
    learnMoreRef,
}: {
    learnMoreRef: ScrollIntoViewRefType;
}) => {
    const [heroStage, setHeroStage] = useState(0);

    return (
        <div
            className={
                "hero-content d-grid align-items-center justify-content-center w-100 h-auto"
            }
        >
            <HeroTyping
                heroTypingStage={heroStage}
                setHeroTypingStage={setHeroStage}
            />
            <HeroCTA heroTypingStage={heroStage} learnMoreRef={learnMoreRef} />
            <HeroImage heroTypingStage={heroStage} />
        </div>
    );
};
export default HeroContent;
