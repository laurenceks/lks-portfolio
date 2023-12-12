import { TypeAnimation } from "react-type-animation";
import heroConfig from "../heroConfig.ts";

const HeroTypingTagClose = () => (
    <TypeAnimation sequence={["</hello>"]} {...heroConfig} cursor={false} />
);
export default HeroTypingTagClose;
