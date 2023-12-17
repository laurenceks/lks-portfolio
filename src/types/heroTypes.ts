import { Dispatch, RefObject, SetStateAction } from "react";

export interface TypingHeroInterface {
    nextHeroTypingStage: () => void;
}

export type ScrollIntoViewRefType = RefObject<HTMLElement | HTMLDivElement>;

export interface HeroTypingInterface {
    heroTypingStage: number;
    setHeroTypingStage?: Dispatch<SetStateAction<number>>;
}

export interface HeroRefInterface {
    learnMoreRef: ScrollIntoViewRefType;
    contactRef: ScrollIntoViewRefType;
}
export interface HeroInterface extends HeroRefInterface, HeroTypingInterface {}
