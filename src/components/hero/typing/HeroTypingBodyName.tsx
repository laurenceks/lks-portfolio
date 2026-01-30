import { TypeAnimation } from "react-type-animation";
import heroConfig from "../heroConfig.ts";
import { TypingHeroAndSetImageInterface } from "../../../types/heroTypes.ts";

const HeroTypingBodyName = ({
    nextHeroTypingStage,
    setShowImage,
}: TypingHeroAndSetImageInterface) => (
    <TypeAnimation
        sequence={[
            "I'm Laurence",
            () => setShowImage(true),
            "I'm Laurence",
            2000,
            "I'm Laurence and I make websites",
            nextHeroTypingStage,
        ]}
        {...heroConfig}
    />
);
export default HeroTypingBodyName;
