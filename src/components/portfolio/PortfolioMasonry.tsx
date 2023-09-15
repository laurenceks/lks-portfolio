import { useEffect, useState } from "react";
import SectionMaxWidth from "../wrappers/SectionMaxWidth.tsx";
import {
    PanelPositionType,
    PortfolioItemInterface,
    PortfolioLightBoxItemInterface,
} from "../../types/portfolioTypes.ts";
import { mockPortfolioItems } from "../../mockData.ts";
import PortfolioMasonryItem from "./PortfolioMasonryItem.tsx";
import PortfolioLightbox from "./PortfolioLightbox.tsx";
import splitItemsIntoCols from "../../utils/splitItemsIntoCols.tsx";

const PortfolioMasonry = () => {
    const [PortfolioMasonryItems, setPortfolioMasonryItems] = useState<
        PortfolioItemInterface[]
    >([]);
    const [hoverItemId, setHoverItemId] = useState<number | null>(null);
    const [portfolioLightboxItem, setPortfolioLightboxItem] =
        useState<PortfolioLightBoxItemInterface | null>(null);
    const [showLightbox, setShowLightbox] = useState(false);

    useEffect(() => {
        setPortfolioMasonryItems(mockPortfolioItems);
        return () => {
            setPortfolioMasonryItems([]);
        };
    }, []);

    return (
        <SectionMaxWidth
            className={"bg-light text-dark position-relative pt-none"}
        >
            <div className={"d-grid grid-columns-3 gap-3 align-items-start"}>
                {splitItemsIntoCols(PortfolioMasonryItems).map((col, i, a) => {
                    let panelPosition: PanelPositionType = "none";
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
                                    lightboxItemId={
                                        portfolioLightboxItem?.item?.id
                                    }
                                    showLightbox={showLightbox}
                                    hoverItemId={hoverItemId}
                                    setPortfolioLightboxItem={
                                        setPortfolioLightboxItem
                                    }
                                    setHoverItemId={setHoverItemId}
                                    setShowLightbox={setShowLightbox}
                                    panelPosition={panelPosition}
                                />
                            ))}
                        </div>
                    );
                })}
            </div>
            <PortfolioLightbox
                item={portfolioLightboxItem}
                showLightbox={showLightbox}
                setShowLightbox={setShowLightbox}
            />
        </SectionMaxWidth>
    );
};
export default PortfolioMasonry;
