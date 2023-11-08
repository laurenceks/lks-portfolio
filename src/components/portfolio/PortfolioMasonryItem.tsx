import { useContext } from "react";
import { PortfolioMasonryItemInterface } from "../../types/portfolioTypes.ts";
import PortfolioInfoPanel from "./PortfolioInfoPanel.tsx";
import ImagePlaceholder from "../common/ImagePlaceholder.tsx";
import { AppContext } from "../../App.tsx";

const PortfolioMasonryItem = ({
    item,
    hoverItemId,
    setHoverItemId,
    panelPosition,
}: PortfolioMasonryItemInterface) => {
    const {
        appState: { currentPortfolioItem },
        dispatchAppState,
    } = useContext(AppContext);
    return (
        <div
            className={`portfolio-masonry-item cursor-pointer w-100 h-auto position-relative ${
                (hoverItemId && hoverItemId !== item.id) ||
                (currentPortfolioItem?.item?.id &&
                    currentPortfolioItem?.item?.id !== item.id)
                    ? "not-active"
                    : ""
            } ${
                currentPortfolioItem?.item?.id &&
                currentPortfolioItem?.item?.id === item.id
                    ? "active"
                    : ""
            }`}
            onMouseOver={() => {
                setHoverItemId(item.id);
            }}
            onMouseLeave={() => setHoverItemId(null)}
            onClick={(e) => {
                dispatchAppState({
                    type: "setCurrentPortfolioItem",
                    payload: {
                        item,
                        rect: e.currentTarget.getBoundingClientRect(),
                        bodyTop: window.scrollY * -1,
                    },
                });
            }}
        >
            <div>
                <div
                    className={
                        "portfolio-masonry-item-image-container overflow-hidden"
                    }
                >
                    <ImagePlaceholder
                        src={item.thumb}
                        alt={item.alt}
                        width={item.thumbWidth}
                        height={item.thumbHeight}
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
