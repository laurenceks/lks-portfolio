import { TypeAnimation } from "react-type-animation";
import heroConfig from "./heroConfig.ts";
import { TypingHeroStartProps } from "../../types/heroTypes.ts";

const HeroTypingBodyOpen = ({ nextHeroTypingStage }: TypingHeroStartProps) => (
    <TypeAnimation sequence={["", 2000, nextHeroTypingStage]} {...heroConfig} />
);
export default HeroTypingBodyOpen;
