import { MouseEvent, useState } from "react";
import { motion } from "framer-motion";
import { PortfolioItemInterface } from "../../types/portfolioTypes.ts";
import PortfolioLightboxExtraImagesDots from "./PortfolioLightboxExtraImagesDots.tsx";
import PortfolioLightboxExtraImagesItem from "./PortfolioLightboxExtraImagesItem.tsx";
import PortfolioLightboxExtraImagesButton from "./PortfolioLightboxExtraImagesButton.tsx";

const PortfolioLightboxExtraImages = ({
    currentPortfolioItem,
    entered,
}: {
    currentPortfolioItem: PortfolioItemInterface;
    entered: boolean;
}) => {
    const dots = [0, ...currentPortfolioItem.extraImages];
    const allImages = [
        currentPortfolioItem.extraImages[
            currentPortfolioItem.extraImages.length - 1
        ],
        null,
        ...currentPortfolioItem.extraImages,
        null,
    ];
    const [currentIndex, setCurrentIndex] = useState(1);
    const [dotIndex, setDotIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const setIndex = (
        e: MouseEvent<HTMLButtonElement | HTMLDivElement>,
        dir: "prev" | "next" | number
    ) => {
        e.stopPropagation();
        if (!animating) {
            setAnimating(true);
            setDotIndex((prevState) => {
                if (typeof dir === "number") {
                    return dir;
                }
                if (dir === "next") {
                    return prevState === dots.length - 1 ? 0 : prevState + 1;
                }
                return prevState === 0 ? dots.length - 1 : prevState - 1;
            });
            setCurrentIndex((prevState) => {
                if (typeof dir === "number") {
                    return dir + 1;
                }
                return dir === "next" ? prevState + 1 : prevState - 1;
            });
        }
    };
    const handleTransitionEnd = () => {
        setAnimating(false);

        if (currentIndex <= 0) {
            setCurrentIndex(currentPortfolioItem.extraImages.length + 1);
        }

        if (currentIndex >= currentPortfolioItem.extraImages.length + 2) {
            setCurrentIndex(1);
        }
    };
    return entered ? (
        <motion.div
            initial={{ opacity: 0, visibility: "hidden" }}
            animate={{ opacity: 1, visibility: "visible" }}
            exit={{ opacity: 0, visibility: "hidden" }}
            transition={{
                duration: 0.2,
                ease: [0.25, 1, 0.5, 1], // cubic-bezier
            }}
            className={`d-grid grid-stack w-100 h-100 position-relative portfolio-lightbox-extra-images`}
        >
            <div
                className="d-grid grid-stack w-100 h-100 pointer-events-none"
                style={{}}
            >
                {allImages.map((x, i) => (
                    <PortfolioLightboxExtraImagesItem
                        item={x}
                        currentIndex={currentIndex}
                        i={i}
                        animating={animating}
                        handleTransitionEnd={handleTransitionEnd}
                    />
                ))}
            </div>
            <div className="d-flex justify-content-center align-items-center w-100 h-100 p-1 position-relative">
                <PortfolioLightboxExtraImagesButton
                    dir="prev"
                    onClick={(e: MouseEvent<HTMLDivElement>) =>
                        setIndex(e, "prev")
                    }
                />
                <PortfolioLightboxExtraImagesDots
                    dots={dots}
                    dotIndex={dotIndex}
                    setIndex={setIndex}
                />
                <PortfolioLightboxExtraImagesButton
                    dir="next"
                    onClick={(e: MouseEvent<HTMLDivElement>) =>
                        setIndex(e, "next")
                    }
                />
            </div>
        </motion.div>
    ) : null;
};
export default PortfolioLightboxExtraImages;
