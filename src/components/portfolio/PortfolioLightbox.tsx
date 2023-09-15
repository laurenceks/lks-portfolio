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
import PortfolioLightboxRow from "./PortfolioLightboxRow.tsx";

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
                className={`portfolio-lightbox position-fixed d-grid grid-columns-2 gap-3 t-0 l-0 w-100 h-100 text-light`}
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
                            src={item?.item?.image}
                            alt={item?.item?.imageAlt}
                        />
                    </div>
                </div>
                <div
                    className={
                        "portfolio-lightbox-content-container p-3 ps-none"
                    }
                >
                    <PortfolioLightboxRow label={"What?"}>
                        <h1>{item?.item?.title}</h1>
                    </PortfolioLightboxRow>
                    <PortfolioLightboxRow label={"When?"}>
                        <h6>{sortingDateToMonthYear(item?.item?.date)}</h6>
                    </PortfolioLightboxRow>
                    <PortfolioLightboxRow label={"Why?"}>
                        <p>{item?.item?.description}</p>
                    </PortfolioLightboxRow>
                    <PortfolioLightboxRow label={"Who?"}>
                        <h3>{item?.item?.client}</h3>
                    </PortfolioLightboxRow>
                    <PortfolioLightboxRow label={"How?"}>
                        <p>{item?.item?.stack}</p>
                    </PortfolioLightboxRow>
                </div>
            </div>
        </CSSTransition>
    );
};
export default PortfolioLightbox;
