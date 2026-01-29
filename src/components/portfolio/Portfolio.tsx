import { RefObject, useContext } from "react";
import PortfolioMasonry from "./PortfolioMasonry.tsx";
import SectionMaxWidth from "../wrappers/SectionMaxWidth.tsx";
import { AppContext } from "../../App.tsx";
import PortfolioFetchError from "./PortfolioFetchError.tsx";
import PortfolioFetching from "./PortfolioFetching.tsx";

const Portfolio = ({
    portfolioRef,
}: {
    portfolioRef: RefObject<HTMLDivElement>;
}) => {
    const {
        appState: { fetching, fetchedOnce, fetchError },
    } = useContext(AppContext);
    let galleryComponent = null;
    if (fetching) {
        galleryComponent = <PortfolioFetching />;
    } else if (fetchedOnce) {
        galleryComponent = fetchError ? (
            <PortfolioFetchError />
        ) : (
            <PortfolioMasonry />
        );
    }
    return (
        <>
            <SectionMaxWidth
                className={`bg-light text-dark portfolio ${
                    fetchedOnce && !fetchError ? "fetched" : ""
                }`}
            >
                <div ref={portfolioRef} className={"max-width-sm pb-5"}>
                    <h1>Portfolio</h1>
                    <p>
                        A diverse range of projects from physical media to
                        full-stack web applications. Click on a project to learn
                        more.
                    </p>
                </div>
                {galleryComponent}
                <div className="bg-ffflurry bottom-part" />
            </SectionMaxWidth>
        </>
    );
};
export default Portfolio;
