import {
    AppReducerActionType,
    AppStateInterface,
} from "../types/appStateTypes.ts";

export const initialAppState: AppStateInterface = {
    portfolioItems: [],
    currentPortfolioItem: null,
    showLightbox: false,
    lightboxSizerRef: null,
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
            return {
                ...prevState,
                currentPortfolioItem: null,
            };
        }
        case "hidePortfolioLightbox": {
            return { ...prevState, showLightbox: false };
        }
        case "setPortfolioLightboxSizerRef": {
            return {
                ...prevState,
                lightboxSizerRef: action.payload,
            };
        }
        default:
            // eslint-disable-next-line no-console
            console.error("Unknown action");
            return prevState;
    }
};
