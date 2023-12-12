import { HeroInterface } from "../../types/heroTypes.ts";

const HeroCTA = ({ heroTypingStage, learnMoreRef }: HeroInterface) => (
    <div
        className={`hero-cta d-flex gap-column-2 z-1 align-self-start mt-5 gap-column-2`}
    >
        <button
            className={`fade-in-up ${heroTypingStage > 3 ? "shown" : ""}`}
            onClick={() => learnMoreRef?.current?.scrollIntoView()}
        >
            More
        </button>
        <button
            className={`outline fade-in-up ${
                heroTypingStage > 3 ? "shown" : ""
            }`}
        >
            Contact
        </button>
    </div>
);
export default HeroCTA;

HeroCTA.defaultProps = {
    heroTypingStage: 0,
};
