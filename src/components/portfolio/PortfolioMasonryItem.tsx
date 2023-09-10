import React, { SetStateAction } from "react";
import {
    ActivePortfolioItem,
    PanelPosition,
    PortfolioItem,
} from "../../types/portfolioTypes.ts";
import PortfolioInfoPanel from "./PortfolioInfoPanel.tsx";

const PortfolioMasonryItem = ({
    item,
    activeItemId,
    showActiveItem,
    setActivePortfolioItem,
    setShowActiveItem,
    panelPosition,
}: {
    item: PortfolioItem;
    activeItemId?: number;
    showActiveItem: boolean;
    setActivePortfolioItem: React.Dispatch<SetStateAction<ActivePortfolioItem>>;
    setShowActiveItem: React.Dispatch<SetStateAction<boolean>>;
    panelPosition: PanelPosition;
}) => (
    <div
        className={`portfolio-masonry-item cursor-pointer bg-accent-1 w-100 h-auto position-relative ${
            showActiveItem && activeItemId !== item?.id ? " not-active" : ""
        }`}
        onMouseOver={(e) => {
            setShowActiveItem(true);
            setActivePortfolioItem({
                item,
                rect: e.currentTarget.getBoundingClientRect(),
            });
        }}
        onMouseLeave={() => setShowActiveItem(false)}
    >
        <img
            className={"d-flex w-100 h-auto"}
            src={item.image}
            alt={item.imageAlt}
        />
        {panelPosition !== "none" && (
            <PortfolioInfoPanel item={item} position={panelPosition} />
        )}
    </div>
);

PortfolioMasonryItem.defaultProps = {
    panelPosition: "none",
};

export default PortfolioMasonryItem;
