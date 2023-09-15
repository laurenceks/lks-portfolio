import { PortfolioMasonryItemInterface } from "../../types/portfolioTypes.ts";
import PortfolioInfoPanel from "./PortfolioInfoPanel.tsx";

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
        className={`portfolio-masonry-item cursor-pointer bg-accent-1 w-100 h-auto position-relative ${
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

PortfolioMasonryItem.defaultProps = {
    panelPosition: "none",
};

export default PortfolioMasonryItem;
