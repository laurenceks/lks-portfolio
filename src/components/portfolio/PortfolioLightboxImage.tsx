import { motion } from "framer-motion";
import { useContext } from "react";
import { PortfolioItemInterface } from "../../types/portfolioTypes.ts";
import { AppContext } from "../../App.tsx";

const PortfolioLightboxImage = ({
    currentPortfolioItem,
    entered,
}: {
    currentPortfolioItem: PortfolioItemInterface;
    entered: boolean;
}) => {
    const {
        appState: { lightboxSizerRef },
    } = useContext(AppContext);

    const imgStyle = { width: "100%", height: "auto" };

    if (window.innerWidth > 920 && lightboxSizerRef?.current) {
        if (
            lightboxSizerRef.current.clientWidth /
                lightboxSizerRef.current.clientHeight >
            currentPortfolioItem.aspectRatio
        ) {
            imgStyle.width = "auto";
            imgStyle.height = "100%";
        }
    }
    return (
        <motion.img
            layoutId={`image-${currentPortfolioItem?.id}`}
            sizes="(max-width: 920px) 100vw, calc(60vw - 3rem)"
            src={currentPortfolioItem?.thumbnailPath}
            srcSet={entered ? currentPortfolioItem?.srcSet : undefined}
            alt={currentPortfolioItem?.alt}
            style={{
                ...imgStyle,
                maxHeight: "100%",
                maxWidth: "100%",
                aspectRatio: currentPortfolioItem?.aspectRatio,
                zIndex: 1000,
            }}
        />
    );
};
export default PortfolioLightboxImage;
