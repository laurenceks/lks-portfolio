import { PortfolioItemInterface } from "../../types/portfolioTypes.ts";
import { dateToMonthYear } from "../../utils/formatDates.ts";

const PortfolioInfoPanel = ({
    item,
    position,
}: {
    item: PortfolioItemInterface;
    position: "left" | "right";
    show?: boolean;
}) => (
    <div
        className={`position-absolute t-0 l-0 hidden portfolio-info-panel w-100 pointer-events-none bg-dark text-light p-3 d-flex flex-column ${position}`}
    >
        {item && (
            <>
                <h5 className={"fw-700"}>{item.title}</h5>
                <div className={"d-flex flex-wrap gap-column-1 mb-2"}>
                    <p className={"tag text-dark bg-light m-none"}>
                        {">_"}
                        {item.projectType}
                    </p>
                    <p className={"tag text-dark bg-light m-none"}>
                        {">_"}
                        {item.media}
                    </p>
                </div>
                <p className={"mb-3"}>{dateToMonthYear(item.date)}</p>
                <p className={"small"}>{item.blurb}</p>
                <p className={"mt-auto smaller fs-italic"}>Click to see more</p>
            </>
        )}
    </div>
);
export default PortfolioInfoPanel;
