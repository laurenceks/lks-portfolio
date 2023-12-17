import { HeroInterface } from "../../types/heroTypes.ts";

const HeroCTA = ({
    heroTypingStage,
    learnMoreRef,
    contactRef,
}: HeroInterface) => (
    <div
        className={`hero-cta button-animation-staggered d-flex gap-column-2 z-1 align-self-start mt-5 gap-column-2`}
    >
        <button
            className={`animation-fade-in-up ${
                heroTypingStage > 3 ? "animation-start" : ""
            }`}
            onClick={() => learnMoreRef.current?.scrollIntoView()}
        >
            More
        </button>
        <button
            className={`outline animation-fade-in-up ${
                heroTypingStage > 3 ? "animation-start" : ""
            }`}
            onClick={() => contactRef.current?.scrollIntoView()}
        >
            Contact
        </button>
    </div>
);
export default HeroCTA;

HeroCTA.defaultProps = {
    heroTypingStage: 0,
};
