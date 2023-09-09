import React, { SetStateAction } from "react";

export interface TypingHeroStartProps {
    nextHeroTypingStage: () => void;
}
export interface HeroProps {
    heroTypingStage: number;
    setHeroTypingStage?: React.Dispatch<SetStateAction<number>>;
    learnMoreRef?: React.MutableRefObject<HTMLInputElement>;
}
