import {
    Dispatch,
    LegacyRef,
    SetStateAction,
    useEffect,
    useRef,
    useState,
} from "react";
import { CSSTransition } from "react-transition-group";
import { PortfolioLightBoxItemInterface } from "../../types/portfolioTypes.ts";
import { sortingDateToMonthYear } from "../../utils/formatDates.ts";

const PortfolioLightbox = ({
    item,
    showLightbox,
    setShowLightbox,
}: {
    item: PortfolioLightBoxItemInterface | null;
    showLightbox: boolean;
    setShowLightbox: Dispatch<SetStateAction<boolean>>;
}) => {
    const nodeRef = useRef() as LegacyRef<HTMLDivElement> | undefined;
    const [inProp, setInProp] = useState(showLightbox);
    const [imageLoaded, setImageLoaded] = useState(false);
    useEffect(() => {
        const img = new Image();
        img.src = item?.item?.img || "";
        img.onload = () => setImageLoaded(true);
    }, [item?.item?.img]);

    useEffect(() => {
        if (showLightbox) {
            setInProp(true);
        }
    }, [showLightbox]);

    return (
        <CSSTransition
            nodeRef={nodeRef}
            in={inProp}
            timeout={400}
            onExited={() => setShowLightbox(false)}
            unmountOnExit
        >
            <div
                ref={nodeRef}
                className={`portfolio-lightbox position-fixed d-grid t-0 l-0 w-100 h-100 text-light`}
                onClick={() => setInProp(false)}
            >
                <div className={"position-relative"}>
                    <div
                        className={`portfolio-lightbox-image-container img-contain position-absolute p-3 pe-none`}
                        style={{
                            width: item?.rect?.width,
                            height: item?.rect?.height,
                            left: item?.rect?.left,
                            top: item?.rect?.top,
                        }}
                    >
                        <img
                            src={
                                imageLoaded
                                    ? item?.item?.img
                                    : item?.item?.thumb
                            }
                            alt={item?.item?.alt}
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
                        {item?.item?.title}
                    </h1>
                    <h1>{item?.item?.title}</h1>
                    <h6>{sortingDateToMonthYear(item?.item?.date)}</h6>
                    <p>{item?.item?.description}</p>
                    <h3>{item?.item?.client}</h3>
                    <p>{item?.item?.stack}</p>
                </div>
            </div>
        </CSSTransition>
    );
};
export default PortfolioLightbox;
