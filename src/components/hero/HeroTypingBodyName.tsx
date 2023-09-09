import { TypeAnimation } from "react-type-animation";
import heroConfig from "./heroConfig.ts";
import { TypingHeroStartProps } from "../../types/heroTypes.ts";

const HeroTypingBodyName = ({ nextHeroTypingStage }: TypingHeroStartProps) => (
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
