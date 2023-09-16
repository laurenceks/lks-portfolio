import { useEffect, useState } from "react";

const ImagePlaceholder = ({
    src,
    alt,
    width,
    height,
}: {
    src: string;
    width: number;
    height: number;
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
            className={imageLoaded ? "" : "bg-placeholder"}
            style={{ aspectRatio: width / height }}
        >
            {imageLoaded && (
                <img className={"d-flex w-100 h-auto"} src={src} alt={alt} />
            )}
        </div>
    );
};

ImagePlaceholder.defaultProps = {
    alt: "",
};

export default ImagePlaceholder;
