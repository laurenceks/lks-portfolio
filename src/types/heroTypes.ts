import { Dispatch, MutableRefObject, SetStateAction } from "react";

export interface TypingHeroStartProps {
    nextHeroTypingStage: () => void;
}
export interface HeroProps {
    heroTypingStage: number;
    setHeroTypingStage?: Dispatch<SetStateAction<number>>;
    learnMoreRef?: MutableRefObject<HTMLInputElement>;
}
