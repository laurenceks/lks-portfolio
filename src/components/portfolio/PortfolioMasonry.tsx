import { RefObject, useContext, useEffect, useRef, useState } from "react";
import { LayoutGroup } from "framer-motion";
import { PanelPositionType } from "../../types/portfolioTypes.ts";
import PortfolioMasonryItem from "./PortfolioMasonryItem.tsx";
import PortfolioLightbox from "./PortfolioLightbox.tsx";
import splitItemsIntoCols from "../../utils/splitItemsIntoCols.ts";
import remToPx from "../../utils/remToPx.ts";
import { AppContext } from "../../App.tsx";
import PortfolioLightboxSizer from "./PortfolioLightboxSizer.tsx";

const PortfolioMasonry = () => {
    const {
        appState: { portfolioItems },
    } = useContext(AppContext);
    const [hoverItemId, setHoverItemId] = useState<number | null>(null);
    const [masonryColumns, setMasonryColumns] = useState(3);
    const masonryContainerRef = useRef(null) as
        | RefObject<HTMLDivElement>
        | undefined;

    useEffect(() => {
        const handleResize = () => {
            setMasonryColumns(
                Math.floor(
                    (masonryContainerRef?.current?.offsetWidth || 0) /
                        remToPx(31.5)
                )
            );
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <LayoutGroup>
            <div
                className={`portfolio-masonry-container d-grid grid-columns-${masonryColumns} gap-3 align-items-start`}
                ref={masonryContainerRef}
            >
                {splitItemsIntoCols(portfolioItems, masonryColumns).map(
                    (col, i, a) => {
                        let panelPosition: PanelPositionType = "none";
                        if (a.length > 1) {
                            panelPosition =
                                i === a.length - 1 ? "left" : "right";
                        }
                        return (
                            <div
                                key={`masonry-col-${i}`}
                                className={
                                    "d-grid gap-row-3 align-content-start"
                                }
                            >
                                {col?.map((item) => (
                                    <PortfolioMasonryItem
                                        key={item.id}
                                        item={item}
                                        hoverItemId={hoverItemId}
                                        setHoverItemId={setHoverItemId}
                                        panelPosition={panelPosition}
                                    />
                                ))}
                            </div>
                        );
                    }
                )}
            </div>
            <PortfolioLightbox />
            <PortfolioLightboxSizer />
        </LayoutGroup>
    );
};
export default PortfolioMasonry;
