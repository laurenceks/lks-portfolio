import { Dispatch, RefObject, SetStateAction } from "react";

export interface TypingHeroInterface {
    nextHeroTypingStage: () => void;
}

export type ScrollIntoViewRefType = RefObject<HTMLElement | HTMLDivElement>;
export interface HeroInterface {
    heroTypingStage: number;
    setHeroTypingStage?: Dispatch<SetStateAction<number>>;
    learnMoreRef?: ScrollIntoViewRefType;
}
