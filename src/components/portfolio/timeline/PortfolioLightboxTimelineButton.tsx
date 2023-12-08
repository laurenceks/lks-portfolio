import { Dispatch, SetStateAction } from "react";
import {
    IoArrowDownCircleOutline,
    IoArrowUpCircleOutline,
} from "react-icons/io5";

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
        className={
            "portfolio-lightbox-timeline-button icon-container cursor-pointer"
        }
        onClick={(e) => {
            e.stopPropagation();
            setActiveItemIndex(type === "down" ? i + 1 : i - 1);
        }}
    >
        {type === "down" ? (
            <IoArrowDownCircleOutline />
        ) : (
            <IoArrowUpCircleOutline />
        )}
    </div>
);

PortfolioLightboxTimelineButtons.defaultProps = {
    timelineItems: [],
};

export default PortfolioLightboxTimelineButtons;
