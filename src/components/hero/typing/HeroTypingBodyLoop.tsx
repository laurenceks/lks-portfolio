import { TypeAnimation } from "react-type-animation";
import heroConfig from "../heroConfig.ts";

const HeroTypingBodyLoop = () => (
    <TypeAnimation
        sequence={[
            "I'm Laurence and I make websites",
            1000,
            "I'm Laurence and I make solutions",
            1000,
            "I'm Laurence and I make dreams",
            2000,
            "",
            2000,
            "What can I make you?",
        ]}
        {...heroConfig}
        preRenderFirstString={true}
    />
);
export default HeroTypingBodyLoop;
