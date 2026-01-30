import { useState } from "react";
import HeroTyping from "./typing/HeroTyping.tsx";
import HeroCTA from "./HeroCTA.tsx";
import HeroImage from "./HeroImage.tsx";
import { HeroRefInterface } from "../../types/heroTypes.ts";

const HeroContent = ({ learnMoreRef, contactRef }: HeroRefInterface) => {
    const [heroStage, setHeroStage] = useState(0);
    const [showImage, setShowImage] = useState(false);

    return (
        <div
            className={
                "hero-content d-grid align-items-center justify-content-center w-100 h-auto py-0 py-sm-3"
            }
        >
            <HeroTyping
                heroTypingStage={heroStage}
                setHeroTypingStage={setHeroStage}
                setShowImage={setShowImage}
            />
            <HeroCTA
                heroTypingStage={heroStage}
                learnMoreRef={learnMoreRef}
                contactRef={contactRef}
            />
            <HeroImage showImage={showImage} />
        </div>
    );
};
export default HeroContent;
