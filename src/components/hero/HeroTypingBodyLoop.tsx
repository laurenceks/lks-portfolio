import { TypeAnimation } from "react-type-animation";
import heroConfig from "./heroConfig.ts";

const HeroTypingBodyLoop = () => (
    <TypeAnimation
        sequence={[
            "I'm Laurence and I make websites",
            2000,
            "I'm Laurence and I innovate solutions",
            2000,
            "I'm Laurence and I build what you need to succeed",
            2000,
        ]}
        {...heroConfig}
        repeat={Infinity}
        preRenderFirstString={true}
    />
);
export default HeroTypingBodyLoop;
