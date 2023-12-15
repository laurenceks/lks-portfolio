import { Dispatch } from "react";
import {
    PortfolioItemInterface,
    PortfolioLightBoxItemInterface,
} from "./portfolioTypes.ts";

export interface AppStateInterface {
    portfolioItems: PortfolioItemInterface[];
    currentPortfolioItem: PortfolioLightBoxItemInterface | null;
    showLightbox: boolean;
    scrollPadding: number;
}

interface setPortfolioItemsInterface {
    type: "setPortfolioItems";
    payload: PortfolioItemInterface[];
}

interface setCurrentPortfolioItemInterface {
    type: "setCurrentPortfolioItem";
    payload: PortfolioLightBoxItemInterface;
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
