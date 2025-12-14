import { useEffect, useState } from "react";
import { PortfolioItemDescriptionItemInterface } from "../../../types/portfolioTypes.ts";
import PortfolioLightboxTimelineButtons from "./PortfolioLightboxTimelineButtons.tsx";

const PortfolioLightboxTimeline = ({
    portfolioDescription = [],
}: {
    portfolioDescription?: PortfolioItemDescriptionItemInterface[];
}) => {
    const [activeItemIndex, setActiveItemIndex] = useState<number>(1);

    useEffect(() => {
        setActiveItemIndex(0);
    }, [portfolioDescription]);

    return (
        <div
            className={
                "portfolio-lightbox-timeline position-relative overflow-hidden"
            }
        >
            <div
                className={
                    "portfolio-lightbox-timeline-grid d-grid position-relative"
                }
            >
                <div
                    className={`${
                        portfolioDescription.length > 1 ? "d-flex" : "d-none"
                    } flex-column`}
                    style={{
                        transform: `translateY(${activeItemIndex * -2.75}rem)`,
                    }}
                >
                    {portfolioDescription.map((_x, i) => (
                        <div
                            key={`portfolio-lightbox-timeline-segment-${i}`}
                            className={`portfolio-lightbox-timeline-segment position-relative d-flex cursor-pointer ${
                                i === activeItemIndex ? "active" : "inactive"
                            } ${i < activeItemIndex ? "hiddens" : ""}`}
                            onClick={(e) => {
                                e.stopPropagation();
                                setActiveItemIndex(i);
                            }}
                        ></div>
                    ))}
                </div>
                <div
                    className={"d-grid grid-stack"}
                    style={{
                        transform: `translateY(${activeItemIndex * 2.75}rem)`,
                        paddingBottom: `${
                            (portfolioDescription.length || 0) * 2.75
                        }rem`,
                    }}
                >
                    {portfolioDescription.map((x, i) => {
                        let activeClass = "";
                        if (activeItemIndex !== null) {
                            activeClass =
                                activeItemIndex === i ? "active" : "inactive";
                        }
                        return (
                            <div
                                key={`portfolio-lightbox-timeline-item-${i}`}
                                className={`position-relative portfolio-lightbox-timeline-item ${activeClass}`}
                            >
                                <h4
                                    className={`portfolio-lightbox-timeline-heading m-none`}
                                >
                                    {x.title}
                                </h4>
                                <div
                                    className={
                                        "portfolio-lightbox-timeline-content pt-1"
                                    }
                                >
                                    <p>{x.content}</p>
                                    <PortfolioLightboxTimelineButtons
                                        i={i}
                                        setActiveItemIndex={setActiveItemIndex}
                                        itemCount={portfolioDescription.length}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default PortfolioLightboxTimeline;
