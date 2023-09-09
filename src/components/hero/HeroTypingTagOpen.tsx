import { TypeAnimation } from "react-type-animation";
import heroConfig from "./heroConfig.ts";
import { TypingHeroStartProps } from "../../types/heroTypes.ts";

const HeroTypingOpenTag = ({ nextHeroTypingStage }: TypingHeroStartProps) => (
    <TypeAnimation
        sequence={["<hello> ", 1000, () => nextHeroTypingStage()]}
        {...heroConfig}
    />
);
export default HeroTypingOpenTag;
