import HeroContent from "./HeroContent.tsx";
import HeroParticleBackground from "./HeroParticleBackground.tsx";
import { HeroRefInterface } from "../../types/heroTypes.ts";

const Hero = ({ learnMoreRef, contactRef }: HeroRefInterface) => (
    <section
        id="hero"
        className={"hero d-grid align-items-center position-relative z-0"}
    >
        <HeroContent learnMoreRef={learnMoreRef} contactRef={contactRef} />
        <HeroParticleBackground />
    </section>
);
export default Hero;
