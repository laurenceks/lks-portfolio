import { HeroTypingInterface } from "../../types/heroTypes.ts";

const HeroImage = ({ heroTypingStage }: HeroTypingInterface) => (
    <div
        className={`hero-image animation-fade-in-up fade-in-up-25 mt-4 mt-lg-none ${
            heroTypingStage > 2 ? "animation-start" : ""
        }`}
    >
        <img
            src={"profilePicture.jpeg"}
            alt={"A picture of me, Laurence Summers. Hello!"}
        />
    </div>
);
export default HeroImage;

HeroImage.defaultProps = {
    heroTypingStage: 0,
};
