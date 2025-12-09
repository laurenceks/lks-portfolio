import { useContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { sortingDateToMonthYear } from "../../utils/formatDates.ts";
import PortfolioLightboxStack from "./PortfolioLightboxStack.tsx";
import PortfolioLightboxTimeline from "./timeline/PortfolioLightboxTimeline.tsx";
import { AppContext } from "../../App.tsx";

const PortfolioLightbox = () => {
    const {
        appState: { currentPortfolioItem, showLightbox },
        dispatchAppState,
    } = useContext(AppContext);

    const [entered, setEntered] = useState(false);

    return (
        <AnimatePresence>
            {showLightbox && currentPortfolioItem && (
                <div className="portfolio-lightbox-wrapper position-fixed t-0 l-0 w-100 h-100">
                    <div
                        className={`portfolio-lightbox  text-light d-grid`}
                        onClick={() =>
                            dispatchAppState({ type: "hidePortfolioLightbox" })
                        }
                    >
                        <motion.div
                            className={"portfolio-lightbox-bg"}
                            initial={{
                                opacity: 0,
                                x: "100%",
                            }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: "100%" }}
                            transition={{
                                duration: 0.4,
                                ease: [0.25, 1, 0.5, 1], // cubic-bezier
                            }}
                            onAnimationComplete={(definition: {
                                opacity: number;
                            }) => {
                                if (definition.opacity === 1) {
                                    setEntered(true);
                                } else {
                                    setEntered(false);
                                    dispatchAppState({
                                        type: "unsetCurrentPortfolioItem",
                                    });
                                }
                            }}
                        ></motion.div>
                        <div
                            className="p-3 pe-lg-none d-flex"
                            style={{
                                maxHeight: "100vh",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <motion.img
                                layoutId={`image-${currentPortfolioItem?.id}`}
                                sizes="(max-width: 920px) 100vw, calc(60vw - 3rem)"
                                src={currentPortfolioItem?.thumbnailPath}
                                srcSet={
                                    entered
                                        ? currentPortfolioItem?.srcSet
                                        : undefined
                                }
                                alt={currentPortfolioItem?.alt}
                                style={{
                                    maxHeight: "100%",
                                    maxWidth: "100%",
                                    width:
                                        currentPortfolioItem?.aspectRatio < 1
                                            ? "auto"
                                            : "100%",
                                    height:
                                        currentPortfolioItem?.aspectRatio < 1
                                            ? "100%"
                                            : "auto",
                                    aspectRatio:
                                        currentPortfolioItem?.aspectRatio,
                                    zIndex: 1000,
                                }}
                            />
                        </div>
                        <motion.div
                            className={
                                "portfolio-lightbox-content-container p-lg-3 p-2"
                            }
                            initial={{ opacity: 0, x: "100%" }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{
                                opacity: 0,
                                x: "100%",
                            }}
                            transition={{
                                duration: 0.6,
                                ease: [0.25, 1, 0.5, 1], // cubic-bezier
                            }}
                        >
                            <h1
                                className={
                                    "portfolio-lightbox-content-back-text position-absolute t-0 fw-900"
                                }
                            >
                                {currentPortfolioItem?.title}
                            </h1>
                            <h1>{currentPortfolioItem?.title}</h1>
                            <h4>
                                {sortingDateToMonthYear(
                                    currentPortfolioItem?.date
                                )}
                            </h4>
                            <h5>{currentPortfolioItem?.client}</h5>
                            <PortfolioLightboxStack
                                itemId={currentPortfolioItem?.id}
                                stack={currentPortfolioItem?.stack}
                            />{" "}
                            {currentPortfolioItem?.url && (
                                <a
                                    className="button url mb-2"
                                    href={currentPortfolioItem?.url}
                                    target="_blank"
                                >
                                    {" "}
                                    See live{" "}
                                </a>
                            )}{" "}
                            <PortfolioLightboxTimeline
                                portfolioDescription={
                                    currentPortfolioItem?.description
                                }
                            />
                        </motion.div>
                    </div>
                </div>
            )}
        </AnimatePresence>
    );
};
export default PortfolioLightbox;
