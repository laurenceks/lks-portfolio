import { HeroInterface } from "../../types/heroTypes.ts";

const HeroImage = ({ heroTypingStage }: HeroInterface) => (
    <div
        className={`hero-image animation-fade-in-up fade-in-up-25 ${
            heroTypingStage > 2 ? "animation-start" : ""
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
