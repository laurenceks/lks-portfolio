import { TypeAnimation } from "react-type-animation";
import heroConfig from "./heroConfig.ts";
import { TypingHeroInterface } from "../../types/heroTypes.ts";

const HeroTypingBodyName = ({ nextHeroTypingStage }: TypingHeroInterface) => (
    <TypeAnimation
        sequence={[
            "I'm Laurence",
            2000,
            "I'm Laurence and I make websites",
            nextHeroTypingStage,
        ]}
        {...heroConfig}
    />
);
export default HeroTypingBodyName;
