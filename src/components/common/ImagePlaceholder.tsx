import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ImagePlaceholder = ({
    id,
    src,
    alt,
    aspectRatio,
}: {
    id: number | string;
    src: string;
    aspectRatio: string | number;
    alt?: string;
}) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => setImageLoaded(true);
    }, [src]);

    return (
        <div className={"position-relative"} style={{ aspectRatio }}>
            <div
                className={
                    "portfolio-image-placeholder bg-light-2 d-flex justify-content-center align-items-center h-100 w-100 position-absolute t-0 l-0"
                }
            >
                <div></div>
                <div></div>
                <div></div>
            </div>
            {imageLoaded && (
                <motion.img
                    layoutId={`image-${id}`}
                    className={"position-relative w-100"}
                    src={src}
                    alt={alt}
                    style={{ aspectRatio }}
                />
            )}
        </div>
    );
};

ImagePlaceholder.defaultProps = {
    alt: "",
};

export default ImagePlaceholder;
