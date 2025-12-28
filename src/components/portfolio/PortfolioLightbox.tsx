import { useContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { dateToMonthYear } from "../../utils/formatDates.ts";
import PortfolioLightboxStack from "./PortfolioLightboxStack.tsx";
import PortfolioLightboxTimeline from "./timeline/PortfolioLightboxTimeline.tsx";
import { AppContext } from "../../App.tsx";
import PortfolioLightboxImageContainer from "./PortfolioLightboxImageContainer.tsx";
import PortfolioLightboxImage from "./PortfolioLightboxImage.tsx";

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
                    <motion.div
                        className={`portfolio-lightbox text-light d-grid`}
                        onClick={() => {
                            if (entered) {
                                dispatchAppState({
                                    type: "hidePortfolioLightbox",
                                });
                            }
                        }}
                    >
                        <motion.div
                            className={"portfolio-lightbox-bg"}
                            initial={{ opacity: 0, x: "100%" }}
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
                        <PortfolioLightboxImageContainer>
                            <PortfolioLightboxImage
                                currentPortfolioItem={currentPortfolioItem}
                                entered={entered}
                            />
                        </PortfolioLightboxImageContainer>
                        <motion.div
                            className={"portfolio-lightbox-content-container"}
                            initial={{ opacity: 0, x: "75%" }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{
                                opacity: 0,
                                x: "75%",
                            }}
                            transition={{
                                duration: 0.4,
                                ease: [0.25, 1, 0.5, 1], // cubic-bezier
                            }}
                        >
                            <motion.h1
                                initial={{ x: "50%" }}
                                animate={{ x: 0 }}
                                exit={{
                                    x: "50%",
                                }}
                                transition={{
                                    duration: 0.4,
                                    ease: [0.25, 1, 0.5, 1], // cubic-bezier
                                }}
                                className={
                                    "portfolio-lightbox-content-back-text position-absolute t-0 fw-900"
                                }
                            >
                                {currentPortfolioItem?.title}
                            </motion.h1>
                            <div className="p-lg-3 p-2">
                                <h1>{currentPortfolioItem?.title}</h1>
                                <h4>
                                    {dateToMonthYear(currentPortfolioItem.date)}
                                </h4>
                                <h5>{currentPortfolioItem?.client}</h5>
                                <PortfolioLightboxStack
                                    itemId={currentPortfolioItem?.id}
                                    stack={currentPortfolioItem?.stack}
                                />
                                {currentPortfolioItem?.url && (
                                    <a
                                        className="button url mb-2"
                                        href={currentPortfolioItem?.url}
                                        target="_blank"
                                    >
                                        See live
                                    </a>
                                )}
                                <PortfolioLightboxTimeline
                                    portfolioDescription={
                                        currentPortfolioItem?.description
                                    }
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
export default PortfolioLightbox;
