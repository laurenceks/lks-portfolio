import { HeroInterface } from "../../types/heroTypes.ts";
import updateSlug from "../../utils/updateSlug.ts";

const HeroCTA = ({
    heroTypingStage,
    learnMoreRef,
    contactRef,
}: HeroInterface) => (
    <div
        className={`hero-cta button-animation-staggered d-flex flex-columns-1 flex-columns-md-2 gap-column-md-2 z-1 align-self-start mt-md-5 gap-2`}
    >
        <button
            className={`animation-fade-in-up ${
                heroTypingStage > 3 ? "animation-start" : ""
            }`}
            onClick={() => {
                learnMoreRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
                updateSlug("/about");
            }}
        >
            More
        </button>
        <button
            className={`outline animation-fade-in-up ${
                heroTypingStage > 3 ? "animation-start" : ""
            }`}
            onClick={() => {
                contactRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
                updateSlug("/contact");
            }}
        >
            Contact
        </button>
    </div>
);
export default HeroCTA;

HeroCTA.defaultProps = {
    heroTypingStage: 0,
};
