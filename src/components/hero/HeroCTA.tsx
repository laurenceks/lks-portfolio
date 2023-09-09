import { HeroProps } from "../../types/heroTypes.ts";

const HeroCTA = ({ heroTypingStage, learnMoreRef }: HeroProps) => (
    <div className={`hero-cta`}>
        <button
            className={heroTypingStage > 2 ? "shown" : ""}
            onClick={() => learnMoreRef.current.scrollIntoView()}
        >
            More
        </button>
        <button className={`outline ${heroTypingStage > 2 ? "shown" : ""}`}>
            Contact
        </button>
    </div>
);
export default HeroCTA;

HeroCTA.defaultProps = {
    heroTypingStage: 0,
};
