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
                                <div className="portfolio-lightbox-stack-icon">
                                    <SiHtml5 />
                                </div>
                                <div className="portfolio-lightbox-stack-icon">
                                    <SiCss3 />
                                </div>
                                <div className="portfolio-lightbox-stack-icon">
                                    <SiSass />
                                </div>
                                <div className="portfolio-lightbox-stack-icon">
                                    <SiJavascript />
                                </div>
                                <div className="portfolio-lightbox-stack-icon">
                                    <SiTypescript />
                                </div>
                                <div className="portfolio-lightbox-stack-icon">
                                    <SiPhp />
                                </div>
                                <div className="portfolio-lightbox-stack-icon">
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
                                <div className="portfolio-lightbox-stack-icon">
                                    <SiReact />
                                </div>
                                <div className="portfolio-lightbox-stack-icon">
                                    <SiJquery />
                                </div>
                                <div className="portfolio-lightbox-stack-icon">
                                    <SiChartdotjs />
                                </div>
                                <div className="portfolio-lightbox-stack-icon">
                                    <SiMapbox />
                                </div>
                                <div className="portfolio-lightbox-stack-icon">
                                    <SlClock />
                                </div>
                                <div className="portfolio-lightbox-stack-icon">
                                    <SiWebpack />
                                </div>
                                <div className="portfolio-lightbox-stack-icon">
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
                                <div className="portfolio-lightbox-stack-icon">
                                    <SiMysql />
                                </div>
                                <div className="portfolio-lightbox-stack-icon">
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
                                <div className="portfolio-lightbox-stack-icon">
                                    <SiGit />
                                </div>
                                <div className="portfolio-lightbox-stack-icon">
                                    <SiGithub />
                                </div>
                                <div className="portfolio-lightbox-stack-icon">
                                    <SiVisualstudiocode />
                                </div>
                                <div className="portfolio-lightbox-stack-icon">
                                    <SiWebstorm />
                                </div>
                                <div className="portfolio-lightbox-stack-icon">
                                    <SiPhpstorm />
                                </div>
                                <div className="portfolio-lightbox-stack-icon">
                                    <SiAtom />
                                </div>
                                <div className="portfolio-lightbox-stack-icon">
                                    <SiMicrosoftexcel />
                                </div>
                                <div className="portfolio-lightbox-stack-icon">
                                    <SiAdobeillustrator />
                                </div>
                                <div className="portfolio-lightbox-stack-icon">
                                    <SiAdobephotoshop />
                                </div>
                                <div className="portfolio-lightbox-stack-icon">
                                    <SiAdobepremierepro />
                                </div>
                                <div className="portfolio-lightbox-stack-icon">
                                    <SiGimp />
                                </div>
                                <div className="portfolio-lightbox-stack-icon">
                                    <SiInkscape />
                                </div>
                                <div className="portfolio-lightbox-stack-icon">
                                    <SiFigma />
                                </div>
                                <div className="portfolio-lightbox-stack-icon">
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
