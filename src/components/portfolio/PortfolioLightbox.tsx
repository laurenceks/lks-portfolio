import { Dispatch, SetStateAction } from "react";
import { PortfolioItem } from "../../types/portfolioTypes.ts";

const PortfolioLightbox = ({
    item,
    shown,
    setShowLightbox,
}: {
    item: PortfolioItem | null;
    shown: boolean;
    setShowLightbox: Dispatch<SetStateAction<boolean>>;
}) => (
    <div
        className={`portfolio-lightbox ${
            shown ? "d-grid" : "d-none"
        } position-fixed p-3 grid-columns-2 gap-3 t-0 l-0 w-100 h-100 bg-dark text-light`}
        onClick={() => setShowLightbox(false)}
    >
        <div className={"img-contain"}>
            <img src={item?.image} alt={item?.imageAlt} />
        </div>
        <div>
            <h3>{item?.title}</h3>
            <h6>{item?.date}</h6>
            <p>{item?.description}</p>
        </div>
    </div>
);
export default PortfolioLightbox;
