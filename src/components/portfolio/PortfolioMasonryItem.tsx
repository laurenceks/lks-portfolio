import { useContext } from "react";
import { motion } from "framer-motion";
import { PortfolioMasonryItemInterface } from "../../types/portfolioTypes.ts";
import PortfolioInfoPanel from "./PortfolioInfoPanel.tsx";
import ImagePlaceholder from "../common/ImagePlaceholder.tsx";
import { AppContext } from "../../App.tsx";

const variants = {
    idle: { scale: 1 },
    hovered: { scale: 1.05 },
    sidelined: { scale: 0.95 },
};
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
    let animate = "idle";
    if (hoverItemId) {
        animate = hoverItemId === item.id ? "hovered" : "sidelined";
    }
    return (
        <motion.div
            onHoverStart={() => setHoverItemId(item.id)}
            onHoverEnd={() => setHoverItemId(null)}
            whileHover={{ scale: 1.05 }}
            className={`portfolio-masonry-item cursor-pointer w-100 h-auto position-relative`}
            variants={variants}
            animate={animate}
            onClick={() => {
                if (!currentPortfolioItem) {
                    dispatchAppState({
                        type: "setCurrentPortfolioItem",
                        payload: item,
                    });
                }
            }}
        >
            <div>
                <div className={"portfolio-masonry-item-image-container "}>
                    <ImagePlaceholder
                        id={item.id}
                        src={item.thumbnailPath}
                        alt={item.alt}
                        aspectRatio={item.aspectRatio}
                    />
                </div>
                {panelPosition !== "none" && (
                    <PortfolioInfoPanel item={item} position={panelPosition} />
                )}
            </div>
        </motion.div>
    );
};

PortfolioMasonryItem.defaultProps = {
    panelPosition: "none",
};

export default PortfolioMasonryItem;
