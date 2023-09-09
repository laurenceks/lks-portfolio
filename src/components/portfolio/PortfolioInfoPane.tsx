import { useEffect, useRef, useState } from "react";
import { ActiveItem } from "../../types/portfolioTypes.ts";

const PortfolioInfoPane = ({
    activeItem,
    showActiveItem,
}: {
    activeItem: ActiveItem;
    showActiveItem?: boolean;
}) => {
    const [infoPanelWidth, setInfoPanelWidth] = useState(0);
    const [infoPanelOnLeft, setInfoPanelOnLeft] = useState(false);
    const infoPanelRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (infoPanelRef.current) {
            setInfoPanelWidth(infoPanelRef.current?.offsetWidth || 0);
        }
    }, []);

    useEffect(() => {
        const activeItemOffset =
            (activeItem?.target?.offsetLeft || 0) +
            (activeItem?.target?.offsetWidth || 0);
        setInfoPanelOnLeft(
            activeItemOffset + infoPanelWidth > window.innerWidth
        );
    }, [activeItem?.target, infoPanelWidth]);

    return (
        <div
            ref={infoPanelRef}
            className={`text-dark p-3 position-absolute t-0 l-0 mx-3 hidden portfolio-info-panel${
                showActiveItem ? " shown" : ""
            }`}
            style={{
                left:
                    (activeItem?.target?.offsetLeft || 0) +
                    (infoPanelOnLeft
                        ? infoPanelWidth * -1
                        : activeItem?.target?.offsetWidth || 0),
                top: activeItem?.target?.offsetTop || 0,
            }}
        >
            {activeItem?.item && (
                <>
                    <h4 className={"fw-700"}>{activeItem.item.title}</h4>
                    <p>{activeItem.item.description}</p>
                </>
            )}
        </div>
    );
};
PortfolioInfoPane.defaultProps = {
    showActiveItem: false,
};
export default PortfolioInfoPane;
