import { Dispatch, MutableRefObject } from "react";
import { PortfolioItemInterface } from "./portfolioTypes.ts";

export interface AppStateInterface {
    portfolioItems: PortfolioItemInterface[];
    currentPortfolioItem: PortfolioItemInterface | null;
    showLightbox: boolean;
    lightboxSizerRef: MutableRefObject<HTMLDivElement | undefined> | null;
}

interface setPortfolioItemsInterface {
    type: "setPortfolioItems";
    payload: PortfolioItemInterface[];
}

interface setCurrentPortfolioItemInterface {
    type: "setCurrentPortfolioItem";
    payload: PortfolioItemInterface;
}

interface unsetCurrentPortfolioItemInterface {
    type: "unsetCurrentPortfolioItem";
}

interface hidePortfolioLightboxInterface {
    type: "hidePortfolioLightbox";
}
interface setPortfolioLightboxSizerRefInterface {
    type: "setPortfolioLightboxSizerRef";
    payload: MutableRefObject<HTMLDivElement>;
}

export type AppReducerActionType =
    | setPortfolioItemsInterface
    | setCurrentPortfolioItemInterface
    | unsetCurrentPortfolioItemInterface
    | hidePortfolioLightboxInterface
    | setPortfolioLightboxSizerRefInterface;

export interface AppContextInterface {
    appState: AppStateInterface;
    dispatchAppState: Dispatch<AppReducerActionType>;
}
