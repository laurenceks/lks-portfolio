import { RefObject, useEffect, useRef, useState } from "react";
import Section from "./components/wrappers/Section.tsx";
import updateSlug from "./utils/updateSlug.ts";

const Experience = ({
    portfolioRef,
    contactRef,
}: {
    portfolioRef: RefObject<HTMLDivElement>;
    contactRef: RefObject<HTMLDivElement>;
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [showButtons, setShowButtons] = useState(false);

    useEffect(() => {
        if (containerRef.current) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setShowButtons(true);
                        observer.disconnect();
                    }
                },
                {
                    threshold: 1,
                }
            );
            observer.observe(containerRef.current);
        }
    }, []);

    return (
        <Section className="bg-light text-dark experience">
            <div ref={containerRef}></div>
            <h3 className={"ta-center"}>Experience where it counts</h3>
            <p className={"max-width-md mx-auto mb-3 ta-center"}>
                15 years experience designing, developing and tinkering. <br />{" "}
                Completely unique real-world solutions and ideas.
            </p>
            <p className={"max-width-md mx-auto mb-3 ta-center"}>
                See the cream of the crop below.{" "}
            </p>
            <div
                className={`button-animation-staggered d-flex gap-column-2 z-1 align-self-start gap-2 justify-content-center flex-wrap`}
            >
                <button
                    className={`animation-fade-in-up ${
                        showButtons ? "animation-start" : ""
                    }`}
                    onClick={() => {
                        portfolioRef.current?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                        });
                        updateSlug("/portfolio");
                    }}
                >
                    Portfolio
                </button>
                <button
                    className={`outline text-primary fw-400 animation-fade-in-up ${
                        showButtons ? "animation-start" : ""
                    }`}
                    onClick={() => {
                        contactRef.current?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                        });
                        updateSlug("/contact");
                    }}
                >
                    Contact
                </button>
            </div>
            <div className="bg-cubes top-part" />
        </Section>
    );
};

export default Experience;
