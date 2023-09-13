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
                className={`portfolio-lightbox position-fixed p-3 d-grid grid-columns-2 gap-3 t-0 l-0 w-100 h-100 text-light`}
                onClick={() => setInProp(false)}
            >
                <div className={"position-relative"}>
                    <div
                        className={`portfolio-lightbox-image-container img-contain position-absolute`}
                        style={{
                            width: item?.rect?.width,
                            height: item?.rect?.height,
                            left: item?.rect?.left,
                            top: item?.rect?.top,
                        }}
                    >
                        <img
                            src={item?.item?.image}
                            alt={item?.item?.imageAlt}
                        />
                    </div>
                </div>
                <div className={"portfolio-lightbox-content-container"}>
                    <h3>{item?.item?.title}</h3>
                    <h6>{item?.item?.date}</h6>
                    <p>{item?.item?.description}</p>
                </div>
            </div>
        </CSSTransition>
    );
};
export default PortfolioLightbox;
