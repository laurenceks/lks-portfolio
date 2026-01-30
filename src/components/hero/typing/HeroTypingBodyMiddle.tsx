import { TypeAnimation } from "react-type-animation";
import heroConfig from "../heroConfig.ts";
import { TypingHeroInterface } from "../../../types/heroTypes.ts";

const HeroTypingBodyMiddle = ({ nextHeroTypingStage }: TypingHeroInterface) => (
    <TypeAnimation
        sequence={["I'm Laurence and I make websites", nextHeroTypingStage]}
        {...heroConfig}
        preRenderFirstString={true}
    />
);
export default HeroTypingBodyMiddle;
