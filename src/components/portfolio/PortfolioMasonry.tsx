import { useState } from "react";
import SectionMaxWidth from "../wrappers/SectionMaxWidth.tsx";
import {
    ActivePortfolioItem,
    PanelPosition,
    PortfolioItem,
} from "../../types/portfolioTypes.ts";
import { mockPortfolioItems } from "../../mockData.ts";
import PortfolioMasonryItem from "./PortfolioMasonryItem.tsx";

const splitItemsIntoCols = (items: PortfolioItem[]) => {
    const columnCount: number = 3;
    const columnsArray: PortfolioItem[][] = [];
    for (let i: number = 0; i < columnCount; i++) {
        columnsArray.push([]);
    }
    items
        .sort((a, b) => (a.date < b.date ? 1 : -1))
        .forEach((item, i) => {
            columnsArray[i % columnCount]?.push(item);
        });
    return columnsArray;
};
const PortfolioMasonry = () => {
    const [PortfolioMasonryItems, setPortfolioMasonryItems] =
        useState(mockPortfolioItems);
    const [activeItem, setActiveItem] = useState<ActivePortfolioItem>({
        rect: undefined,
        item: undefined,
    });
    const [showActiveItem, setShowActiveItem] = useState(false);

    return (
        <SectionMaxWidth
            className={
                "bg-light text-dark position-relative overflow-x-hidden pt-none"
            }
        >
            <div className={"d-grid grid-columns-3 gap-3 align-items-start"}>
                {splitItemsIntoCols(PortfolioMasonryItems).map((col, i, a) => {
                    let panelPosition: PanelPosition = "none";
                    if (a.length > 1) {
                        panelPosition = i === a.length - 1 ? "left" : "right";
                    }
                    return (
                        <div
                            key={`masonry-col-${i}`}
                            className={"d-grid gap-row-3 align-content-start"}
                        >
                            {col?.map((item) => (
                                <PortfolioMasonryItem
                                    key={item.id}
                                    item={item}
                                    activeItemId={activeItem.item?.id}
                                    showActiveItem={showActiveItem}
                                    setActivePortfolioItem={setActiveItem}
                                    setShowActiveItem={setShowActiveItem}
                                    panelPosition={panelPosition}
                                />
                            ))}
                        </div>
                    );
                })}
            </div>
        </SectionMaxWidth>
    );
};
export default PortfolioMasonry;
