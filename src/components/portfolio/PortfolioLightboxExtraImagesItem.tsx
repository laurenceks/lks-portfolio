import { PortfolioItemInterface } from "../../types/portfolioTypes.ts";

const PortfolioLightboxExtraImagesItem = ({
    item,
    handleTransitionEnd,
    currentIndex,
    i,
    animating,
}: {
    item: PortfolioItemInterface["extraImages"][0] | null;
    handleTransitionEnd: () => void;
    currentIndex: number;
    i: number;
    animating: boolean;
}) => (
    <div
        onTransitionEnd={handleTransitionEnd}
        className={`w-100 h-100 d-flex align-items-center justify-content-center portfolio-lightbox-extra-images-item ${
            currentIndex === i ? "active" : ""
        } ${animating ? "animate" : ""} ${currentIndex > i ? "left" : "right"}`}
        key={`extra-${i}-${item}`}
    >
        {!!item && (
            <div className="w-100 h-100 d-flex align-items-center justify-content-center">
                <img srcSet={item.srcSet} src={item.src} alt={item.alt} />
            </div>
        )}
    </div>
);
export default PortfolioLightboxExtraImagesItem;
