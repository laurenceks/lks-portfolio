import {
    SiAdobeillustrator,
    SiAdobephotoshop,
    SiAdobepremierepro,
    SiAtom,
    SiChartdotjs,
    SiCss3,
    SiFigma,
    SiGimp,
    SiGit,
    SiGithub,
    SiHtml5,
    SiInkscape,
    SiJavascript,
    SiJquery,
    SiMapbox,
    SiMicrosoftexcel,
    SiMongodb,
    SiMysql,
    SiPassport,
    SiPhp,
    SiPhpstorm,
    SiReact,
    SiSass,
    SiSlack,
    SiTypescript,
    SiVisualbasic,
    SiVisualstudiocode,
    SiWebpack,
    SiWebstorm,
} from "react-icons/si";
import { SlClock } from "react-icons/sl";
import Section from "./components/wrappers/Section.tsx";

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
                        <div className="portfolio-lightbox-stack-icon icon-container">
                            <SiHtml5 />
                        </div>
                        <div className="portfolio-lightbox-stack-icon icon-container">
                            <SiCss3 />
                        </div>
                        <div className="portfolio-lightbox-stack-icon icon-container">
                            <SiSass />
                        </div>
                        <div className="portfolio-lightbox-stack-icon icon-container">
                            <SiJavascript />
                        </div>
                        <div className="portfolio-lightbox-stack-icon icon-container">
                            <SiTypescript />
                        </div>
                        <div className="portfolio-lightbox-stack-icon icon-container">
                            <SiPhp />
                        </div>
                        <div className="portfolio-lightbox-stack-icon icon-container">
                            <SiVisualbasic />
                        </div>
                    </div>
                </div>
                <div>
                    <h6>Libraries, Frameworks and APIs</h6>
                    <div
                        className={
                            "d-flex gap-2 flex-wrap justify-content-center align-items-center"
                        }
                    >
                        <div className="portfolio-lightbox-stack-icon icon-container">
                            <SiReact />
                        </div>
                        <div className="portfolio-lightbox-stack-icon icon-container">
                            <SiJquery />
                        </div>
                        <div className="portfolio-lightbox-stack-icon icon-container">
                            <SiChartdotjs />
                        </div>
                        <div className="portfolio-lightbox-stack-icon icon-container">
                            <SiMapbox />
                        </div>
                        <div className="portfolio-lightbox-stack-icon icon-container">
                            <SlClock />
                        </div>
                        <div className="portfolio-lightbox-stack-icon icon-container">
                            <SiWebpack />
                        </div>
                        <div className="portfolio-lightbox-stack-icon icon-container">
                            <SiPassport />
                        </div>
                    </div>
                </div>
                <div>
                    <h6>Databases</h6>
                    <div
                        className={
                            "d-flex gap-2 flex-wrap justify-content-center align-items-center"
                        }
                    >
                        <div className="portfolio-lightbox-stack-icon icon-container">
                            <SiMysql />
                        </div>
                        <div className="portfolio-lightbox-stack-icon icon-container">
                            <SiMongodb />
                        </div>
                    </div>
                </div>
                <div>
                    <h6>Programs and applications</h6>
                    <div
                        className={
                            "d-flex gap-2 flex-wrap justify-content-center align-items-center"
                        }
                    >
                        <div className="portfolio-lightbox-stack-icon icon-container">
                            <SiGit />
                        </div>
                        <div className="portfolio-lightbox-stack-icon icon-container">
                            <SiGithub />
                        </div>
                        <div className="portfolio-lightbox-stack-icon icon-container">
                            <SiVisualstudiocode />
                        </div>
                        <div className="portfolio-lightbox-stack-icon icon-container">
                            <SiWebstorm />
                        </div>
                        <div className="portfolio-lightbox-stack-icon icon-container">
                            <SiPhpstorm />
                        </div>
                        <div className="portfolio-lightbox-stack-icon icon-container">
                            <SiAtom />
                        </div>
                        <div className="portfolio-lightbox-stack-icon icon-container">
                            <SiMicrosoftexcel />
                        </div>
                        <div className="portfolio-lightbox-stack-icon icon-container">
                            <SiAdobeillustrator />
                        </div>
                        <div className="portfolio-lightbox-stack-icon icon-container">
                            <SiAdobephotoshop />
                        </div>
                        <div className="portfolio-lightbox-stack-icon icon-container">
                            <SiAdobepremierepro />
                        </div>
                        <div className="portfolio-lightbox-stack-icon icon-container">
                            <SiGimp />
                        </div>
                        <div className="portfolio-lightbox-stack-icon icon-container">
                            <SiInkscape />
                        </div>
                        <div className="portfolio-lightbox-stack-icon icon-container">
                            <SiFigma />
                        </div>
                        <div className="portfolio-lightbox-stack-icon icon-container">
                            <SiSlack />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="portfolio-bg light" />
    </Section>
);

export default Technologies;
