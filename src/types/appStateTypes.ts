import { Dispatch, MutableRefObject } from "react";
import { PortfolioItemInterface } from "./portfolioTypes.ts";

export interface AppStateInterface {
    portfolioItems: PortfolioItemInterface[];
    currentPortfolioItem: PortfolioItemInterface | null;
    showLightbox: boolean;
    lightboxSizerRef: MutableRefObject<HTMLDivElement | undefined> | null;
    fetching: boolean;
    fetchError: boolean;
    fetchedOnce: boolean;
}

interface fetchPortfolioItemsInterface {
    type: "fetchPortfolioItems";
}
interface portfolioItemsFetchErrorInterface {
    type: "portfolioItemsFetchError";
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
    | fetchPortfolioItemsInterface
    | portfolioItemsFetchErrorInterface
    | setPortfolioItemsInterface
    | setCurrentPortfolioItemInterface
    | unsetCurrentPortfolioItemInterface
    | hidePortfolioLightboxInterface
    | setPortfolioLightboxSizerRefInterface;

export interface AppContextInterface {
    appState: AppStateInterface;
    dispatchAppState: Dispatch<AppReducerActionType>;
}
