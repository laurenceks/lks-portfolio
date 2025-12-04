import {
    useContext,
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
} from "react";
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

    const nodeRef = useRef<HTMLDivElement>(null);
    const imgContainerRef = useRef<HTMLDivElement>(null);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [entered, setEntered] = useState(false);

    const [imgContainerTransformState, setImgContainerTransformState] =
        useState("");
    const imgPath = currentPortfolioItem?.item
        ? `images/portfolio/full/${currentPortfolioItem?.item?.imgFileName}`
        : "";

    useEffect(() => {
        const img = new Image();
        img.src = imgPath;
        img.onload = () => setImageLoaded(true);
    }, [imgPath]);

    useLayoutEffect(() => {
        if (currentPortfolioItem?.rect && imgContainerRef?.current) {
            const { top, left, width, height } =
                imgContainerRef.current.getBoundingClientRect();
            const { paddingTop, paddingBottom, paddingLeft } = getComputedStyle(
                imgContainerRef?.current
            );
            const parsedPaddingLeft = parseInt(paddingLeft, 10);
            const parsedPaddingTop = parseInt(paddingTop, 10);
            const parsedPaddingBottom = parseInt(paddingBottom, 10);

            const isTallerThanContainer =
                currentPortfolioItem.rect.width /
                    currentPortfolioItem.rect.height <
                width / height;

            const normalScale =
                currentPortfolioItem.rect.width /
                (width - parsedPaddingLeft - left);

            const scaleY =
                currentPortfolioItem.rect.height /
                (height - parsedPaddingTop - parsedPaddingBottom - top);

            const tallScale = (height * scaleY * (width / height)) / width;

            const translateX =
                currentPortfolioItem.rect.left +
                currentPortfolioItem.rect.width / 2 -
                (parsedPaddingLeft * normalScale) / 2;

            const translateY =
                currentPortfolioItem.rect.top +
                currentPortfolioItem.rect.height / 2;

            setImgContainerTransformState(
                `translate(calc(${translateX}px - 50%), calc(${translateY}px - 50%)) scale(${
                    isTallerThanContainer ? tallScale : normalScale
                })`
            );
        } else if (!showLightbox) {
            setImgContainerTransformState("");
        }
    }, [currentPortfolioItem, showLightbox]);

    return (
        <CSSTransition
            nodeRef={nodeRef}
            in={showLightbox}
            appear={true}
            timeout={400}
            onExited={() => {
                if (!showLightbox) {
                    dispatchAppState({ type: "unsetCurrentPortfolioItem" });
                    setEntered(false);
                }
            }}
            onEntered={() => setEntered(true)}
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
                        className={`portfolio-lightbox-image-container img-contain position-absolute p-3 pe-none w-100 h-100`}
                        style={{ transform: imgContainerTransformState }}
                    >
                        <img
                            srcSet={
                                imageLoaded && entered
                                    ? currentPortfolioItem?.item?.srcSet
                                    : currentPortfolioItem?.item?.thumbnailPath
                            }
                            sizes="calc(60vw - 3rem)"
                            alt={currentPortfolioItem?.item?.alt}
                        />
                    </div>
                    <div
                        className={`position-absolute p-3 pe-none w-100 h-100`}
                        ref={imgContainerRef}
                    ></div>
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
                    {currentPortfolioItem?.item?.url && (
                        <a
                            className="button url mb-2"
                            href={currentPortfolioItem?.item?.url}
                            target="_blank"
                        >
                            See live
                        </a>
                    )}
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
