import { Dispatch, SetStateAction } from "react";
import PortfolioLightboxTimelineButton from "./PortfolioLightboxTimelineButton.tsx";

const PortfolioLightboxTimelineButtons = ({
    i,
    itemCount,
    setActiveItemIndex,
}: {
    i: number;
    itemCount: number;
    setActiveItemIndex: Dispatch<SetStateAction<number>>;
}) => (
    <div className={"d-flex gap-column-2"}>
        {i > 0 && itemCount > 1 && (
            <PortfolioLightboxTimelineButton
                type="up"
                i={i}
                setActiveItemIndex={setActiveItemIndex}
            />
        )}
        {i < itemCount - 1 && (
            <PortfolioLightboxTimelineButton
                type="down"
                i={i}
                setActiveItemIndex={setActiveItemIndex}
            />
        )}
    </div>
);

PortfolioLightboxTimelineButtons.defaultProps = {
    timelineItems: [],
};

export default PortfolioLightboxTimelineButtons;
