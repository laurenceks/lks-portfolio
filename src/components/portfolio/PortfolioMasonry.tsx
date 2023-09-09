import { useState } from "react";
import SectionMaxWidth from "../wrappers/SectionMaxWidth.tsx";
import PortfolioInfoPane from "./PortfolioInfoPane.tsx";
import { ActiveItem, PortfolioItem } from "../../types/portfolioTypes.ts";

const PortfolioMasonry = () => {
    const [PortfolioMasonryItems, setPortfolioMasonryItems] = useState([
        {
            id: "00001",
            title: "Movember999",
            url: "https://movember999.com",
            type: "website",
            ap: 2,
        },
        {
            id: "000546",
            title: "Movember999",
            url: "https://movember999.com",
            type: "website",
            ap: 0.5,
        },
        {
            id: "4536",
            title: "Movember999",
            url: "https://movember999.com",
            type: "website",
            ap: 1.8,
        },
        {
            id: "453453",
            title: "Movember999",
            url: "https://movember999.com",
            type: "website",
            ap: 0.8,
        },
        {
            id: "00045345301",
            title: "Movember999",
            url: "https://movember999.com",
            type: "website",
            ap: 1,
        },
    ]);
    const [activeItem, setActiveItem] = useState<ActiveItem>({
        target: undefined,
        item: undefined,
    });
    const [showActiveItem, setShowActiveItem] = useState(false);
    const splitItemsIntoCols = (items: [PortfolioItem?]) => {
        const columnCount: number = 3;
        const columnsArray: [[PortfolioItem?]?] = [];
        for (let i: number = 0; i < columnCount; i++) {
            columnsArray.push([]);
        }
        items
            .sort((a, b) => (a.ap < b.ap ? 1 : -1))
            .forEach((item, i) => {
                columnsArray[i % columnCount]?.push(item);
            });
        return columnsArray;
    };
    return (
        <SectionMaxWidth
            className={"bg-light text-dark position-relative overflow-x-hidden"}
        >
            <div className={"d-grid grid-columns-3 gap-3 align-items-start"}>
                {splitItemsIntoCols(
                    PortfolioMasonryItems as [PortfolioItem?]
                ).map((col, i) => (
                    <div
                        key={`masonry-col-${i}`}
                        className={"d-grid gap-row-3 align-content-start"}
                    >
                        {col?.map((item) => (
                            <div
                                key={item?.id}
                                className={`portfolio-masonry-item cursor-pointer bg-accent-1 ${
                                    showActiveItem &&
                                    activeItem.item?.id !== item?.id
                                        ? " not-active"
                                        : ""
                                }`}
                                style={{ aspectRatio: item?.ap }}
                                onMouseOver={(e) => {
                                    setActiveItem({
                                        target: e.target as HTMLDivElement,
                                        item,
                                    });
                                    setShowActiveItem(true);
                                }}
                                onMouseLeave={() => setShowActiveItem(false)}
                            ></div>
                        ))}
                    </div>
                ))}
            </div>
            <PortfolioInfoPane
                activeItem={activeItem}
                showActiveItem={showActiveItem}
            />
        </SectionMaxWidth>
    );
};
export default PortfolioMasonry;
