import { TypeAnimation } from "react-type-animation";
import heroConfig from "./heroConfig.ts";
import heroTypingBackgroundTextContent from "./heroTypingBackgroundTextContent.ts";

const HeroBackground = () => (
    <TypeAnimation
        sequence={[heroTypingBackgroundTextContent]}
        {...heroConfig}
        wrapper={"div"}
        className={"hero-typing-background"}
        speed={80}
    />
);
export default HeroBackground;
