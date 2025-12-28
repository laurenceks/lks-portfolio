import Section from "./components/wrappers/Section.tsx";
import StackIcon from "./components/common/StackIcon.tsx";

const Technologies = () => (
    <Section className="technologies">
        <div className={"px-3 py-4 py-sm-7 ta-center mx-auto max-width-page"}>
            <h4 className={"mb-6"}>Technologies I'm experienced with </h4>
            <div
                className={
                    "d-flex gap-column-4 gap-row-6 flex-wrap flex-columns-sm-2 flex-columns-1 justify-content-center"
                }
            >
                <div>
                    <h6>Languages</h6>
                    <div
                        className={
                            "d-flex gap-2 flex-wrap justify-content-center align-items-center"
                        }
                    >
                        <StackIcon stackItemId="HTML" />
                        <StackIcon stackItemId="CSS" />
                        <StackIcon stackItemId="SASS" />
                        <StackIcon stackItemId="JavaScript" />
                        <StackIcon stackItemId="TypeScript" />
                        <StackIcon stackItemId="PHP" />
                        <StackIcon stackItemId="VBA" />
                    </div>
                </div>
                <div>
                    <h6>Libraries, Frameworks and APIs</h6>
                    <div
                        className={
                            "d-flex gap-2 flex-wrap justify-content-center align-items-center"
                        }
                    >
                        <StackIcon stackItemId="ReactJS" />
                        <StackIcon stackItemId="jQuery" />
                        <StackIcon stackItemId="ChartJS" />
                        <StackIcon stackItemId="Mapbox" />
                        <StackIcon stackItemId="MomentJS" />
                        <StackIcon stackItemId="Webpack" />
                        <StackIcon stackItemId="Passport" />
                    </div>
                </div>
                <div>
                    <h6>Databases</h6>
                    <div
                        className={
                            "d-flex gap-2 flex-wrap justify-content-center align-items-center"
                        }
                    >
                        <StackIcon stackItemId="MySQL" />
                        <StackIcon stackItemId="MongoDB" />
                    </div>
                </div>
                <div>
                    <h6>Programs and applications</h6>
                    <div
                        className={
                            "d-flex gap-2 flex-wrap justify-content-center align-items-center"
                        }
                    >
                        <StackIcon stackItemId="Git" />
                        <StackIcon stackItemId="Github" />
                        <StackIcon stackItemId="VSC" />
                        <StackIcon stackItemId="WebStorm" />
                        <StackIcon stackItemId="PhpStorm" />
                        <StackIcon stackItemId="Atom" />
                        <StackIcon stackItemId="Excel" />
                        <StackIcon stackItemId="Illustrator" />
                        <StackIcon stackItemId="Photoshop" />
                        <StackIcon stackItemId="Premiere Pro" />
                        <StackIcon stackItemId="GIMP" />
                        <StackIcon stackItemId="Inkscape" />
                        <StackIcon stackItemId="Figma" />
                        <StackIcon stackItemId="Slack" />
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-cubes bottom-part" />
        <div className="bg-ffflurry top-part" />
    </Section>
);

export default Technologies;
