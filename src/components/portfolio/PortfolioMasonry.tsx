import { useState } from "react";
import SectionMaxWidth from "../wrappers/SectionMaxWidth.tsx";
import { PanelPosition, PortfolioItem } from "../../types/portfolioTypes.ts";
import { mockPortfolioItems } from "../../mockData.ts";
import PortfolioMasonryItem from "./PortfolioMasonryItem.tsx";
import PortfolioLightbox from "./PortfolioLightbox.tsx";

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
    const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);
    const [showActiveItem, setShowActiveItem] = useState(false);
    const [showLightbox, setShowLightbox] = useState(false);

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
                                    activeItemId={activeItem?.id}
                                    showActiveItem={showActiveItem}
                                    setActivePortfolioItem={setActiveItem}
                                    setShowActiveItem={setShowActiveItem}
                                    setShowLightbox={setShowLightbox}
                                    panelPosition={panelPosition}
                                />
                            ))}
                        </div>
                    );
                })}
            </div>
            <PortfolioLightbox
                item={activeItem}
                shown={showLightbox}
                setShowLightbox={setShowLightbox}
            />
        </SectionMaxWidth>
    );
};
export default PortfolioMasonry;
