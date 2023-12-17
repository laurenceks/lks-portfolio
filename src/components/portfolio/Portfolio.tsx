import { RefObject } from "react";
import PortfolioMasonry from "./PortfolioMasonry.tsx";
import SectionMaxWidth from "../wrappers/SectionMaxWidth.tsx";

const Portfolio = ({
    portfolioRef,
}: {
    portfolioRef: RefObject<HTMLDivElement>;
}) => (
    <>
        <SectionMaxWidth className={"bg-light text-dark"}>
            <div ref={portfolioRef} className={"max-width-sm"}>
                <h1>Portfolio</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Architecto eaque eum iste nisi nobis nulla numquam obcaecati
                    quasi sunt vitae! Dolorem eveniet id labore molestias quae
                    quaerat soluta tempora voluptatem!
                </p>
            </div>
        </SectionMaxWidth>
        <PortfolioMasonry />
    </>
);
export default Portfolio;
