import { Dispatch } from "react";
import getPortfolioItems from "./getPortfolioItems.ts";
import { AppReducerActionType } from "../types/appStateTypes.ts";

const fetchPortfolioItems = (
    dispatchAppState: Dispatch<AppReducerActionType>
) => {
    (async () => {
        try {
            const items = await getPortfolioItems();
            const [section, itemSlug] = window.location.pathname
                .split("/")
                .filter(Boolean);
            const item = items.find((x) => x.slug === itemSlug);
            console.log(section, itemSlug, item);
            if (section === "portfolio" && itemSlug && item) {
                dispatchAppState({
                    type: "setPortfolioItemsAndCurrentPortfolioItem",
                    payload: { item, items },
                });
            } else {
                dispatchAppState({
                    type: "setPortfolioItems",
                    payload: items,
                });
            }
        } catch (_e) {
            dispatchAppState({ type: "portfolioItemsFetchError" });
        }
    })();
};
export default fetchPortfolioItems;
