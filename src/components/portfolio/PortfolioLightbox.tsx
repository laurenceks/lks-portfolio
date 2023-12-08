import { Ref, useContext, useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { sortingDateToMonthYear } from "../../utils/formatDates.ts";
import PortfolioLightboxStack from "./PortfolioLightboxStack.tsx";
import PortfolioLightboxTimeline from "./timeline/PortfolioLightboxTimeline.tsx";
import { AppContext } from "../../App.tsx";

const PortfolioLightbox = () => {
    const {
        appState: { currentPortfolioItem, showLightbox },
        dispatchAppState,
    } = useContext(AppContext);

    const nodeRef = useRef() as Ref<HTMLDivElement> | undefined;
    const [imageLoaded, setImageLoaded] = useState(false);
    useEffect(() => {
        const img = new Image();
        img.src = currentPortfolioItem?.item?.img || "";
        img.onload = () => setImageLoaded(true);
    }, [currentPortfolioItem?.item?.img]);

    return (
        <CSSTransition
            nodeRef={nodeRef}
            in={showLightbox}
            appear={true}
            timeout={400}
            onExited={() => {
                if (!showLightbox) {
                    dispatchAppState({ type: "unsetCurrentPortfolioItem" });
                }
            }}
        >
            <div
                ref={nodeRef}
                className={`portfolio-lightbox position-fixed t-0 l-0 w-100 h-100 text-light ${
                    currentPortfolioItem ? "d-grid" : "d-none"
                }`}
                onClick={() =>
                    dispatchAppState({ type: "hidePortfolioLightbox" })
                }
            >
                <div className={"position-relative"}>
                    <div
                        className={`portfolio-lightbox-image-container img-contain position-absolute p-3 pe-none`}
                        style={{
                            width: currentPortfolioItem?.rect?.width,
                            height: currentPortfolioItem?.rect?.height,
                            left: currentPortfolioItem?.rect?.left,
                            top: currentPortfolioItem?.rect?.top,
                        }}
                    >
                        <img
                            src={
                                imageLoaded
                                    ? currentPortfolioItem?.item?.img
                                    : currentPortfolioItem?.item?.thumb
                            }
                            alt={currentPortfolioItem?.item?.alt}
                        />
                    </div>
                </div>
                <div
                    className={
                        "portfolio-lightbox-content-container p-3 ps-none"
                    }
                >
                    <h1
                        className={
                            "portfolio-lightbox-content-back-text position-absolute t-0 fw-900"
                        }
                    >
                        {currentPortfolioItem?.item?.title}
                    </h1>
                    <h1>{currentPortfolioItem?.item?.title}</h1>
                    <h4>
                        {sortingDateToMonthYear(
                            currentPortfolioItem?.item?.date
                        )}
                    </h4>
                    <h5>{currentPortfolioItem?.item?.client}</h5>
                    <PortfolioLightboxStack
                        itemId={currentPortfolioItem?.item?.id}
                        stack={currentPortfolioItem?.item?.stack}
                    />
                    <PortfolioLightboxTimeline
                        portfolioDescription={
                            currentPortfolioItem?.item?.description
                        }
                    />
                </div>
            </div>
        </CSSTransition>
    );
};
export default PortfolioLightbox;
