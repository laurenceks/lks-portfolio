import { Dispatch, Ref, SetStateAction, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { PortfolioLightBoxItemInterface } from "../../types/portfolioTypes.ts";

const PortfolioLightbox = ({
    item,
    shown,
    setShowLightbox,
}: {
    item: PortfolioLightBoxItemInterface | null;
    shown: boolean;
    setShowLightbox: Dispatch<SetStateAction<boolean>>;
}) => {
    const nodeRef = useRef() as Ref<HTMLElement | undefined>;
    return (
        <CSSTransition nodeRef={nodeRef} in={shown} timeout={400}>
            <div
                ref={nodeRef}
                className={`portfolio-lightbox ${
                    shown ? "d-grid" : "d-none"
                } position-fixed p-3 grid-columns-2 gap-3 t-0 l-0 w-100 h-100 text-light`}
                onClick={() => setShowLightbox(false)}
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
