import { Dispatch } from "react";
import getPortfolioItems from "./getPortfolioItems.ts";
import { AppReducerActionType } from "../types/appStateTypes.ts";

const fetchPortfolioItems = (
    dispatchAppState: Dispatch<AppReducerActionType>
) => {
    (async () => {
        try {
            dispatchAppState({
                type: "setPortfolioItems",
                payload: await getPortfolioItems(),
            });
        } catch (_e) {
            dispatchAppState({ type: "portfolioItemsFetchError" });
        }
    })();
};
export default fetchPortfolioItems;
