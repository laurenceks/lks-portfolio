import { useEffect, useState } from "react";

const ImagePlaceholder = ({
    src,
    alt,
    aspectRatio,
}: {
    src: string;
    aspectRatio: number;
    alt?: string;
}) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => setImageLoaded(true);
    }, [src]);

    return (
        <div
            className={"bg-light-2 position-relative"}
            style={{ aspectRatio }}
        >
            <div
                className={
                    "portfolio-image-placeholder d-flex justify-content-center align-items-center h-100 w-100 position-absolute t-0 l-0"
                }
            >
                <div></div>
                <div></div>
                <div></div>
            </div>
            {imageLoaded && (
                <img
                    className={"d-flex w-100 h-auto position-relative"}
                    src={src}
                    alt={alt}
                />
            )}
        </div>
    );
};

ImagePlaceholder.defaultProps = {
    alt: "",
};

export default ImagePlaceholder;
