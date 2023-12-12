import { HeroInterface } from "../../types/heroTypes.ts";

const HeroImage = ({ heroTypingStage }: HeroInterface) => (
    <div
        className={`hero-image fade-in-up ${
            heroTypingStage > 2 ? "shown" : ""
        }`}
    >
        <img
            src={"profilePicture.jpeg"}
            alt={"A picture of me, Laurence Summers"}
        />
    </div>
);
export default HeroImage;

HeroImage.defaultProps = {
    heroTypingStage: 0,
};
