import HeroContent from "./HeroContent.tsx";
import ParticleBackground from "../particles/ParticleBackground.tsx";

const Hero = ({ learnMoreRef }) => (
    <section id="hero" className={"hero"}>
        <HeroContent learnMoreRef={learnMoreRef} />
        <ParticleBackground />
    </section>
);
export default Hero;
