import { PortfolioMasonryItemInterface } from "../../types/portfolioTypes.ts";
import PortfolioInfoPanel from "./PortfolioInfoPanel.tsx";
import ImagePlaceholder from "../common/ImagePlaceholder.tsx";

const PortfolioMasonryItem = ({
    item,
    hoverItemId,
    lightboxItemId,
    showLightbox,
    setPortfolioLightboxItem,
    setShowLightbox,
    setHoverItemId,
    panelPosition,
}: PortfolioMasonryItemInterface) => (
    <div
        className={`portfolio-masonry-item cursor-pointer w-100 h-auto position-relative ${
            (hoverItemId && hoverItemId !== item.id) ||
            (showLightbox && lightboxItemId !== item.id)
                ? "not-active"
                : ""
        } ${
            showLightbox && lightboxItemId && lightboxItemId === item.id
                ? "active"
                : ""
        }`}
        onMouseOver={() => {
            setHoverItemId(item.id);
        }}
        onMouseLeave={() => setHoverItemId(null)}
        onClick={(e) => {
            setPortfolioLightboxItem({
                item,
                rect: e.currentTarget.getBoundingClientRect(),
            });
            setShowLightbox(true);
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

PortfolioMasonryItem.defaultProps = {
    panelPosition: "none",
};

export default PortfolioMasonryItem;
