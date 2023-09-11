import { Dispatch, LegacyRef, SetStateAction, useRef, useState } from "react";
import {
    PanelPosition,
    PortfolioItem,
    PortfolioItemExpanded,
} from "../../types/portfolioTypes.ts";
import PortfolioInfoPanel from "./PortfolioInfoPanel.tsx";

const PortfolioMasonryItem = ({
    item,
    activeItemId,
    showActiveItem,
    setActivePortfolioItem,
    setShowActiveItem,
    setShowLightbox,
    panelPosition,
}: {
    item: PortfolioItem;
    activeItemId?: number;
    showActiveItem: boolean;
    setActivePortfolioItem: Dispatch<SetStateAction<PortfolioItem | null>>;
    setShowActiveItem: Dispatch<SetStateAction<boolean>>;
    setShowLightbox: Dispatch<SetStateAction<boolean>>;
    panelPosition: PanelPosition;
}) => {
    const [ItemPosition, setItemPosition] = useState<PortfolioItemExpanded>({
        expanded: false,
    });
    const containerRef = useRef<LegacyRef<HTMLDivElement>>();
    return (
        <div
            ref={containerRef}
            className={`portfolio-masonry-item cursor-pointer bg-accent-1 w-100 h-auto position-relative ${
                showActiveItem && activeItemId !== item?.id ? " not-active" : ""
            } ${ItemPosition.expanded ? " expanded" : ""}`}
            onMouseOver={(e) => {
                setShowActiveItem(true);
                setActivePortfolioItem(item);
            }}
            onMouseLeave={() => setShowActiveItem(false)}
            onClick={() => {
                setShowLightbox(true);
                setItemPosition((prevState) =>
                    prevState.expanded
                        ? { expanded: false }
                        : {
                              expanded: true,
                              height: containerRef.current?.offsetHeight || 0,
                              width: containerRef.current?.offsetWidth || 0,
                              left:
                                  containerRef.current?.parentElement
                                      ?.offsetLeft || 0,
                              top:
                                  containerRef.current?.getBoundingClientRect()
                                      .y || 0,
                          }
                );
            }}
            style={{ height: ItemPosition.height }}
        >
            <div>
                <div className={"portfolio-masonry-item-image-container"}>
                    <img
                        className={"d-flex w-100 h-auto"}
                        src={item.image}
                        alt={item.imageAlt}
                    />
                </div>
                {panelPosition !== "none" && (
                    <PortfolioInfoPanel item={item} position={panelPosition} />
                )}
            </div>
        </div>
    );
};

PortfolioMasonryItem.defaultProps = {
    panelPosition: "none",
};

export default PortfolioMasonryItem;
