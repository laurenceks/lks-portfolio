import { TypeAnimation } from "react-type-animation";
import heroConfig from "../heroConfig.ts";

const HeroTypingBodyEnd = () => (
    <TypeAnimation
        sequence={[
            "I'm Laurence and I make solutions",
            1000,
            "What can I make you?",
        ]}
        {...heroConfig}
        preRenderFirstString={true}
    />
);
export default HeroTypingBodyEnd;
