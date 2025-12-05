import { useState } from "react";
import HeroTyping from "./typing/HeroTyping.tsx";
import HeroCTA from "./HeroCTA.tsx";
import HeroImage from "./HeroImage.tsx";
import { HeroRefInterface } from "../../types/heroTypes.ts";

const HeroContent = ({ learnMoreRef, contactRef }: HeroRefInterface) => {
    const [heroStage, setHeroStage] = useState(0);

    return (
        <div
            className={
                "hero-content d-grid align-items-center justify-content-center w-100 h-auto py-sm-0 py-3"
            }
        >
            <HeroTyping
                heroTypingStage={heroStage}
                setHeroTypingStage={setHeroStage}
            />
            <HeroCTA
                heroTypingStage={heroStage}
                learnMoreRef={learnMoreRef}
                contactRef={contactRef}
            />
            <HeroImage heroTypingStage={heroStage} />
        </div>
    );
};
export default HeroContent;
