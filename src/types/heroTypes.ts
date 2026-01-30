import { Dispatch, RefObject, SetStateAction } from "react";

export interface TypingHeroInterface {
    nextHeroTypingStage: () => void;
}
export interface TypingHeroAndSetImageInterface extends TypingHeroInterface {
    setShowImage: Dispatch<SetStateAction<boolean>>;
}

export type ScrollIntoViewRefType = RefObject<HTMLElement | HTMLDivElement>;

export interface HeroTypingInterface {
    heroTypingStage: number;
    setShowImage: Dispatch<SetStateAction<boolean>>;
    setHeroTypingStage?: Dispatch<SetStateAction<number>>;
}

export interface HeroRefInterface {
    learnMoreRef: ScrollIntoViewRefType;
    contactRef: ScrollIntoViewRefType;
}
export interface HeroInterface
    extends HeroRefInterface,
        Omit<HeroTypingInterface, "setShowImage"> {}
