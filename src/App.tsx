import { createContext, useEffect, useReducer, useRef } from "react";
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
import Portfolio from "./components/portfolio/Portfolio.tsx";
import HeadingGrid from "./components/wrappers/HeadingGrid.tsx";
import Hero from "./components/hero/Hero.tsx";
import Nav from "./components/nav/Nav.tsx";
import {
    appStateReducer,
    initialAppState,
} from "./reducers/appStateReducer.ts";
import { AppContextInterface } from "./types/appStateTypes.ts";

export const AppContext = createContext<AppContextInterface>({
    appState: initialAppState,
    dispatchAppState: () => {},
});

function App() {
    const [appState, dispatchAppState] = useReducer(
        appStateReducer,
        initialAppState
    );
    const learnMoreRef = useRef(null);

    useEffect(() => {
        document.body.className = appState.currentPortfolioItem
            ? "no-scroll"
            : "position-static";
        if (!appState.currentPortfolioItem) {
            window.scrollTo({
                top:
                    parseInt(document.body.style.top.replace("px", ""), 10) *
                    -1,
            });
        }
        document.body.style.top = `${
            appState.currentPortfolioItem?.bodyTop || 0
        }px`;
    }, [appState.currentPortfolioItem]);

    return (
        <AppContext.Provider value={{ appState, dispatchAppState }}>
            <header></header>
            <main>
                <Hero learnMoreRef={learnMoreRef} />
                <Nav />
                <HeadingGrid className={"nav-background"}>
                    <h1>More than just websites</h1>
                    <p>
                        Entirely bespoke web apps that solve your problems and
                        simplify your workflows. Tailored solutions that place a
                        premium on user experience. Quality innovations that
                        will help your business succeed.
                    </p>
                </HeadingGrid>
                <div className={"p-8 max-width-sm bg-light text-dark mx-auto"}>
                    <h1 className={"ta-center"}>An image here</h1>
                </div>
                <div
                    className={
                        "px-3 py-7 py-sm-4 ta-center mx-auto max-width-page"
                    }
                >
                    <h4 className={"mb-6"}>
                        Technologies I'm experienced with
                    </h4>
                    <div
                        className={
                            "d-flex gap-column-4 gap-row-6 flex-wrap flex-columns-2 flex-columns-sm-1 justify-content-center"
                        }
                    >
                        <div>
                            <h6>Languages</h6>
                            <div
                                className={
                                    "d-flex gap-column-2 flex-wrap justify-content-center align-items-center"
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
                <Portfolio />
            </main>
            <footer></footer>
        </AppContext.Provider>
    );
}

export default App;
