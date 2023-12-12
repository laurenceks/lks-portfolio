import { TypeAnimation } from "react-type-animation";
import heroConfig from "./heroConfig.ts";
import heroTypingBackgroundTextContent from "./heroTypingBackgroundTextContent.ts";

const HeroBackground = () => (
    <TypeAnimation
        sequence={[heroTypingBackgroundTextContent]}
        {...heroConfig}
        wrapper={"div"}
        className={
            "hero-typing-background position-absolute b-0 text-dark-blue-grey"
        }
        speed={80}
    />
);
export default HeroBackground;
