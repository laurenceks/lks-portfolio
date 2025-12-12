import { MutableRefObject, useContext, useEffect, useRef } from "react";
import { AppContext } from "../../App.tsx";
import PortfolioLightboxImageContainer from "./PortfolioLightboxImageContainer.tsx";

const PortfolioLightbox = () => {
    const {
        appState: { lightboxSizerRef },
        dispatchAppState,
    } = useContext(AppContext);

    const lightboxPortfolioSizerRef = useRef<
        HTMLDivElement | undefined
    >() as MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        if (!lightboxSizerRef?.current) {
            dispatchAppState({
                type: "setPortfolioLightboxSizerRef",
                payload: lightboxPortfolioSizerRef,
            });
        }
    }, [dispatchAppState, lightboxSizerRef]);

    return (
        <div
            className="portfolio-lightbox-wrapper position-fixed t-0 l-0 w-100 h-100"
            style={{ pointerEvents: "none" }}
        >
            <div className={`portfolio-lightbox text-light d-grid`}>
                <PortfolioLightboxImageContainer>
                    <div
                        className="w-100 h-100"
                        ref={lightboxPortfolioSizerRef || undefined}
                    ></div>
                </PortfolioLightboxImageContainer>
            </div>
        </div>
    );
};
export default PortfolioLightbox;
