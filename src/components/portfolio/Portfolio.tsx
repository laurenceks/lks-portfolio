import { RefObject } from "react";
import PortfolioMasonry from "./PortfolioMasonry.tsx";
import SectionMaxWidth from "../wrappers/SectionMaxWidth.tsx";

const Portfolio = ({
    portfolioRef,
}: {
    portfolioRef: RefObject<HTMLDivElement>;
}) => (
    <>
        <SectionMaxWidth className={"bg-light text-dark portfolio"}>
            <div ref={portfolioRef} className={"max-width-sm pb-5"}>
                <h1>Portfolio</h1>
                <p>
                    A diverse range of projects from physical media to
                    full-stack web applications. Click on a project to learn
                    more.
                </p>
            </div>
            <PortfolioMasonry />
        </SectionMaxWidth>
    </>
);
export default Portfolio;
