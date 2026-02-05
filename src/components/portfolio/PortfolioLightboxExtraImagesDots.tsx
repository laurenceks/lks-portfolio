import { MouseEvent } from "react";

const PortfolioLightboxExtraImagesDots = ({
    dots,
    dotIndex,
    setIndex,
}: {
    dots: unknown[];
    dotIndex: number;
    setIndex: (
        e: MouseEvent<HTMLButtonElement | HTMLDivElement>,
        dir: number
    ) => void;
}) => (
    <div className="w-100 h-100 d-flex align-items-end justify-content-center position-relative">
        <div className="d-flex justify-content-center gap-1 d-flex align-items-center justify-content-center p-1 position-relative portfolio-lightbox-extra-images-dots">
            {dots.map((_d, i) => (
                <div
                    key={`dot-${i}`}
                    className={`bg-light cursor-pointer dot ${
                        dotIndex === i ? "active" : ""
                    }`}
                    onClick={(e) => setIndex(e, i)}
                />
            ))}
        </div>
    </div>
);

export default PortfolioLightboxExtraImagesDots;
