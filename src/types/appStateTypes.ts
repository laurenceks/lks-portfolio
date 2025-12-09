import { Dispatch } from "react";
import { PortfolioItemInterface } from "./portfolioTypes.ts";

export interface AppStateInterface {
    portfolioItems: PortfolioItemInterface[];
    currentPortfolioItem: PortfolioItemInterface | null;
    showLightbox: boolean;
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

export type AppReducerActionType =
    | setPortfolioItemsInterface
    | setCurrentPortfolioItemInterface
    | unsetCurrentPortfolioItemInterface
    | hidePortfolioLightboxInterface;

export interface AppContextInterface {
    appState: AppStateInterface;
    dispatchAppState: Dispatch<AppReducerActionType>;
}
