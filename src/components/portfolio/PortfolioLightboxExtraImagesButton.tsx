import { MouseEvent } from "react";

const PortfolioLightboxExtraImagesButton = ({
    dir,
    onClick,
}: {
    dir: "prev" | "next";
    onClick: (e: MouseEvent<HTMLDivElement>) => void;
}) => (
    <div
        role="button"
        className={`portfolio-lightbox-extra-images-button icon-container cursor-pointer ${dir}`}
        onClick={onClick}
    ></div>
);

PortfolioLightboxExtraImagesButton.defaultProps = {
    timelineItems: [],
};

export default PortfolioLightboxExtraImagesButton;
