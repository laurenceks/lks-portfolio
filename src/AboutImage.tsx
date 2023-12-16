import { useCallback, useEffect, useRef, useState } from "react";

const imageCount = 3;
const AboutImage = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const imageScrollWatch = useCallback(() => {
        if (containerRef.current) {
            const range =
                window.innerHeight - containerRef.current.offsetHeight;
            const { top } = containerRef.current.getBoundingClientRect();
            setCurrentImageIndex(
                Math.max(
                    0,
                    Math.min(
                        imageCount - 1,
                        Math.floor(
                            imageCount *
                                Math.min(
                                    1,
                                    Math.max(
                                        0,
                                        (range - Math.max(0, top)) / range
                                    )
                                )
                        )
                    )
                )
            );
        }
    }, []);

    useEffect(() => {
        if (containerRef.current) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        window.addEventListener("scroll", imageScrollWatch);
                    } else {
                        window.removeEventListener("scroll", imageScrollWatch);
                    }
                },
                {
                    threshold: 1,
                    rootMargin: "10% 0px",
                }
            );
            observer.observe(containerRef.current);
        }
        return () => {
            window.removeEventListener("scroll", imageScrollWatch);
        };
    }, [imageScrollWatch]);

    return (
        <div
            className={
                "about-image-container d-grid grid-stack justify-content-center align-content-center overflow-hidden"
            }
            ref={containerRef}
        >
            {Array(imageCount)
                .fill(null)
                .map((_x, i) => (
                    <div
                        key={`about-image-${i}`}
                        className={`img-cover ${
                            currentImageIndex === i ? "active" : ""
                        } ${currentImageIndex > i ? "scrolled-past" : ""}`}
                    >
                        <img
                            src={`about/cropped/about-${i + 1}.png`}
                            alt={`About image ${i + 1}`}
                        />
                    </div>
                ))}
        </div>
    );
};

export default AboutImage;
