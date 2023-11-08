import { useEffect, useState } from "react";
import { PortfolioItemDescriptionItemInterface } from "../../types/portfolioTypes.ts";

const PortfolioLightboxTimeline = ({
    portfolioDescription,
}: {
    portfolioDescription?: PortfolioItemDescriptionItemInterface[];
}) => {
    const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);

    useEffect(() => {
        setActiveItemIndex(portfolioDescription?.length === 1 ? 0 : null);
        return () => {
            setActiveItemIndex(null);
        };
    }, [portfolioDescription]);

    return (
        <div>
            <div
                className={"d-grid grid-stack"}
                style={{
                    transform:
                        activeItemIndex === null
                            ? ""
                            : `translateY(${activeItemIndex * 0.5}rem)`,
                }}
            >
                {" "}
                {portfolioDescription?.map((x, i) => (
                    <div
                        key={`portfolio-lightbox-timeline-item-${i}`}
                        className={`position-relative portfolio-lightbox-timeline-item d-flex cursor-pointer ${
                            activeItemIndex === i ? "" : "hidden"
                        }`}
                        onClick={(e) => {
                            e.stopPropagation();
                            setActiveItemIndex(i);
                        }}
                    >
                        <div className={"position-relative flex-grow-1"}>
                            <h4
                                className={`portfolio-lightbox-timeline-heading d-flex m-none`}
                            >
                                {x.title}
                            </h4>
                            <div
                                className={
                                    "portfolio-lightbox-timeline-content position-absolute b-0 l-0 pt-1"
                                }
                            >
                                <p>{x.content}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className={"d-flex flex-column"}>
                {portfolioDescription?.map((x, i) => {
                    let activeClass = "";
                    if (activeItemIndex !== null) {
                        activeClass =
                            activeItemIndex === i ? "active" : "inactive";
                    }
                    return (
                        <div
                            key={`portfolio-lightbox-timeline-item-${i}`}
                            className={`position-relative portfolio-lightbox-timeline-item d-flex cursor-pointer ${activeClass}`}
                            onClick={(e) => {
                                e.stopPropagation();
                                setActiveItemIndex(i);
                            }}
                        >
                            <div
                                className={
                                    "portfolio-lightbox-timeline-segment"
                                }
                            ></div>
                            <div className={"position-relative flex-grow-1"}>
                                <h4
                                    className={`portfolio-lightbox-timeline-heading d-flex m-none`}
                                >
                                    {x.title}
                                </h4>
                                <div
                                    className={
                                        "portfolio-lightbox-timeline-content position-absolute b-0 l-0 pt-1"
                                    }
                                >
                                    <p className={"hidden"}>{x.content}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

PortfolioLightboxTimeline.defaultProps = {
    timelineItems: [],
};

export default PortfolioLightboxTimeline;
