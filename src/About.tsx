import { RefObject } from "react";
import Section from "./components/wrappers/Section.tsx";
import AboutImage from "./AboutImage.tsx";

const About = ({ aboutRef }: { aboutRef: RefObject<HTMLDivElement> }) => (
    <Section className={"heading-grid nav-background p-none"}>
        <div
            ref={aboutRef}
            className={
                "about-grid d-grid grid-columns-2 grid-columns-md-1 ms-gutter ms-md-none gap-column-8 align-items-center"
            }
        >
            <div className={"max-width-sm py-7"}>
                <h1>More than just websites</h1>
                <p>
                    Entirely bespoke web apps that solve your problems and
                    simplify your workflows. Tailored solutions that place a
                    premium on user experience. Quality innovations that will
                    help your business succeed.
                </p>
            </div>
            <AboutImage />
        </div>
    </Section>
);

export default About;
