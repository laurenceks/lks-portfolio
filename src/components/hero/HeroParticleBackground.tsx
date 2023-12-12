import { useCallback } from "react";
import { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import Particles from "react-particles";

const HeroParticleBackground = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    return (
        <div
            className={
                "hero-particles-background position-absolute z--1 t-0 l-0 w-100 h-100"
            }
        >
            <Particles
                init={particlesInit}
                options={{
                    fullScreen: {
                        enable: false,
                        zIndex: 0,
                    },
                    background: {
                        color: {
                            value: "#0c0c0c",
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "repulse",
                            },
                            onHover: {
                                enable: true,
                                mode: "attract",
                            },
                            resize: true,
                        },
                        modes: {
                            repulse: {
                                distance: 200,
                                duration: 3,
                            },
                            attract: {
                                distance: 100,
                                duration: 3,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#788AA3",
                        },
                        links: {
                            color: "#788AA3",
                            distance: 150,
                            enable: true,
                            opacity: 0.35,
                            width: 1,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 0.2,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 1000,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 1,
                        },
                        shape: {
                            type: "none",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
            />
        </div>
    );
};

export default HeroParticleBackground;
