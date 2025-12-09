import { createContext, useEffect, useReducer, useRef } from "react";
import Portfolio from "./components/portfolio/Portfolio.tsx";
import Nav from "./components/nav/Nav.tsx";
import {
    appStateReducer,
    initialAppState,
} from "./reducers/appStateReducer.ts";
import { AppContextInterface } from "./types/appStateTypes.ts";
import About from "./About.tsx";
import Section from "./components/wrappers/Section.tsx";
import Experience from "./Experience.tsx";
import Technologies from "./Technologies.tsx";
import Hero from "./components/hero/Hero.tsx";

export const AppContext = createContext<AppContextInterface>({
    appState: initialAppState,
    dispatchAppState: () => {},
});

function App() {
    const [appState, dispatchAppState] = useReducer(
        appStateReducer,
        initialAppState
    );
    const learnMoreRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const portfolioRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.body.className = appState.currentPortfolioItem
            ? "no-scroll"
            : "";
    }, [appState.currentPortfolioItem]);

    return (
        <AppContext.Provider value={{ appState, dispatchAppState }}>
            <header></header>
            <main>
                <Hero learnMoreRef={learnMoreRef} contactRef={contactRef} />
                <div ref={learnMoreRef} />
                <Nav refs={[aboutRef, portfolioRef, contactRef]} />
                <About aboutRef={aboutRef} />
                <Experience portfolioRef={portfolioRef} />
                <Technologies />
                <Portfolio portfolioRef={portfolioRef} />
                <Section>
                    <div ref={contactRef}>
                        <h2>Contact</h2>
                    </div>
                </Section>
            </main>
            <footer></footer>
        </AppContext.Provider>
    );
}

export default App;
