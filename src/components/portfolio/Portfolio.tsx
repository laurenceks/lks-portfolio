import HeadingGrid from "../wrappers/HeadingGrid.tsx";
import PortfolioMasonry from "./PortfolioMasonry.tsx";

const Portfolio = () => (
    <>
        <HeadingGrid className={"bg-light text-dark"}>
            <h1>Portfolio</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Architecto eaque eum iste nisi nobis nulla numquam obcaecati
                quasi sunt vitae! Dolorem eveniet id labore molestias quae
                quaerat soluta tempora voluptatem!
            </p>
        </HeadingGrid>
        <PortfolioMasonry />
    </>
);
export default Portfolio;
