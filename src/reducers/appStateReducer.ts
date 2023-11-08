import {
    AppReducerActionType,
    AppStateInterface,
} from "../types/appStateTypes.ts";
import { mockPortfolioItems } from "../mockData.ts";

export const initialAppState: AppStateInterface = {
    portfolioItems: mockPortfolioItems,
    currentPortfolioItem: null,
    showLightbox: false,
};

export const appStateReducer = (
    prevState: AppStateInterface,
    action: AppReducerActionType
): AppStateInterface => {
    switch (action.type) {
        case "setPortfolioItems": {
            return { ...prevState, portfolioItems: action.payload };
        }
        case "setCurrentPortfolioItem": {
            return {
                ...prevState,
                currentPortfolioItem: action.payload,
                showLightbox: true,
            };
        }
        case "unsetCurrentPortfolioItem": {
            return { ...prevState, currentPortfolioItem: null };
        }
        case "showPortfolioLightbox": {
            return { ...prevState, showLightbox: true };
        }
        case "hidePortfolioLightbox": {
            return { ...prevState, showLightbox: false };
        }
        default:
            // eslint-disable-next-line no-console
            console.error("Unknown action");
            return prevState;
    }
};
