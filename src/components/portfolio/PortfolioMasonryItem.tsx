import { Dispatch, SetStateAction } from "react";
import {
    PanelPositionType,
    PortfolioItemInterface,
    PortfolioLightBoxItemInterface,
} from "../../types/portfolioTypes.ts";
import PortfolioInfoPanel from "./PortfolioInfoPanel.tsx";

const PortfolioMasonryItem = ({
    item,
    hoverItemId,
    setPortfolioLightboxItem,
    setShowLightbox,
    setHoverItemId,
    panelPosition,
}: {
    item: PortfolioItemInterface;
    activeItemId?: number | null;
    hoverItemId?: number | null;
    setPortfolioLightboxItem: Dispatch<
        SetStateAction<PortfolioLightBoxItemInterface | null>
    >;
    setHoverItemId: Dispatch<SetStateAction<number | null>>;
    setShowLightbox: Dispatch<SetStateAction<boolean>>;
    panelPosition: PanelPositionType;
}) => (
    <div
        className={`portfolio-masonry-item cursor-pointer bg-accent-1 w-100 h-auto position-relative ${
            hoverItemId && hoverItemId !== item?.id ? "not-active" : ""
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
