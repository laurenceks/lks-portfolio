import { TypeAnimation } from "react-type-animation";
import heroConfig from "./heroConfig.ts";
import { TypingHeroInterface } from "../../types/heroTypes.ts";

const HeroTypingBodyOpen = ({ nextHeroTypingStage }: TypingHeroInterface) => (
    <TypeAnimation sequence={["", 2000, nextHeroTypingStage]} {...heroConfig} />
);
export default HeroTypingBodyOpen;
