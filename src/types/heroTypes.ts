import { Dispatch, MutableRefObject, SetStateAction } from "react";

export interface TypingHeroInterface {
    nextHeroTypingStage: () => void;
}
export interface HeroInterface {
    heroTypingStage: number;
    setHeroTypingStage?: Dispatch<SetStateAction<number>>;
    learnMoreRef?: MutableRefObject<HTMLInputElement>;
}
