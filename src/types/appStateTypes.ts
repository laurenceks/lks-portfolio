import { Dispatch } from "react";
import {
    PortfolioItemInterface,
    PortfolioLightBoxItemInterface,
} from "./portfolioTypes.ts";

export interface AppStateInterface {
    portfolioItems: PortfolioItemInterface[];
    currentPortfolioItem: PortfolioLightBoxItemInterface | null;
    showLightbox: boolean;
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

interface showPortfolioLightbox {
    type: "showPortfolioLightbox";
}
interface hidePortfolioLightbox {
    type: "hidePortfolioLightbox";
}

export type AppReducerActionType =
    | setPortfolioItemsInterface
    | setCurrentPortfolioItemInterface
    | unsetCurrentPortfolioItemInterface
    | showPortfolioLightbox
    | hidePortfolioLightbox;

export interface AppContextInterface {
    appState: AppStateInterface;
    dispatchAppState: Dispatch<AppReducerActionType>;
}
