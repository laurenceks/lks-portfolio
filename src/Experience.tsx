import { RefObject, useEffect, useRef, useState } from "react";
import Section from "./components/wrappers/Section.tsx";

const Experience = ({
    portfolioRef,
}: {
    portfolioRef: RefObject<HTMLDivElement>;
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [showButtons, setShowButtons] = useState(false);

    useEffect(() => {
        if (containerRef.current) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    console.log(entry);
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
        <Section className="bg-light text-dark">
            <div ref={containerRef}></div>
            <h3 className={"ta-center"}>Experience where it counts</h3>
            <p className={"max-width-md mx-auto mb-3"}>
                A portfolio of a diverse range of projects from physical media
                to full-stack web applications{" "}
            </p>
            <div
                className={`button-animation-staggered d-flex gap-column-2 z-1 align-self-start gap-column-2 justify-content-center`}
            >
                <button
                    className={`animation-fade-in-up ${
                        showButtons ? "animation-start" : ""
                    }`}
                    onClick={() => portfolioRef.current?.scrollIntoView()}
                >
                    Portfolio
                </button>
                <button
                    className={`outline text-primary fw-400 animation-fade-in-up ${
                        showButtons ? "animation-start" : ""
                    }`}
                >
                    Contact
                </button>
            </div>
        </Section>
    );
};

export default Experience;
