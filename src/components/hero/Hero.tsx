import HeroContent from "./HeroContent.tsx";
import HeroParticleBackground from "./HeroParticleBackground.tsx";
import { ScrollIntoViewRefType } from "../../types/heroTypes.ts";

const Hero = ({ learnMoreRef }: { learnMoreRef: ScrollIntoViewRefType }) => (
    <section
        id="hero"
        className={"hero d-grid align-items-center position-relative z-0"}
    >
        <HeroContent learnMoreRef={learnMoreRef} />
        <HeroParticleBackground />
    </section>
);
export default Hero;
