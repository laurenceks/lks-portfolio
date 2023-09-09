import { useCallback } from "react";
import { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import Particles from "react-particles";

const ParticleBar = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        // await loadFull(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(
        async (container: Container | undefined) => {
            await console.log(container);
        },
        []
    );
    return (
        <div className={"hero-particles-background"}>
            <Particles
                init={particlesInit}
                loaded={particlesLoaded}
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

export default ParticleBar;
