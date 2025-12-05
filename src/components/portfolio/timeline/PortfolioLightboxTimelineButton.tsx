import { Dispatch, SetStateAction } from "react";

const PortfolioLightboxTimelineButtons = ({
    type,
    i,
    setActiveItemIndex,
}: {
    type: "down" | "up";
    i: number;
    setActiveItemIndex: Dispatch<SetStateAction<number>>;
}) => (
    <div
        className={`portfolio-lightbox-timeline-button icon-container cursor-pointer ${type}`}
        onClick={(e) => {
            e.stopPropagation();
            setActiveItemIndex(type === "down" ? i + 1 : i - 1);
        }}
    ></div>
);

PortfolioLightboxTimelineButtons.defaultProps = {
    timelineItems: [],
};

export default PortfolioLightboxTimelineButtons;
