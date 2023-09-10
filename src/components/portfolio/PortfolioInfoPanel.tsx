import PortfolioInfoPanelRow from "./PortfolioInfoPanelRow.tsx";
import { PortfolioItem } from "../../types/portfolioTypes.ts";

const PortfolioInfoPanel = ({
    item,
    position,
}: {
    item: PortfolioItem;
    position: "left" | "right";
    show?: boolean;
}) => (
    <div
        className={`position-absolute t-0 l-0 hidden portfolio-info-panel w-100 pointer-events-none bg-dark text-light p-3 d-flex flex-column ${position}`}
    >
        {item && (
            <>
                <h5 className={"fw-700 d-inline-block me-1 mb-0"}>
                    {item.title}
                </h5>
                <div className={"d-grid portfolio-info-panel-grid"}>
                    <PortfolioInfoPanelRow label={"Date"} value={item.date} />
                    <PortfolioInfoPanelRow label={"Type"} value={item.type} />
                    <PortfolioInfoPanelRow label={"Media"} value={item.media} />
                </div>
                <p className={"small portfolio-info-panel-description"}>
                    {item.description}
                </p>
                <p className={"mt-auto smaller fs-italic"}>Click to see more</p>
            </>
        )}
    </div>
);
export default PortfolioInfoPanel;
