import { TypeAnimation } from "react-type-animation";
import heroConfig from "./heroConfig.ts";
import { TypingHeroInterface } from "../../types/heroTypes.ts";

const HeroTypingOpenTag = ({ nextHeroTypingStage }: TypingHeroInterface) => (
    <TypeAnimation
        sequence={["<hello> ", 1000, () => nextHeroTypingStage()]}
        {...heroConfig}
    />
);
export default HeroTypingOpenTag;
