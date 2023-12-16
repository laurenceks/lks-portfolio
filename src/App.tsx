import { createContext, useEffect, useReducer, useRef } from "react";
import Portfolio from "./components/portfolio/Portfolio.tsx";
import Hero from "./components/hero/Hero.tsx";
import Nav from "./components/nav/Nav.tsx";
import {
    appStateReducer,
    initialAppState,
} from "./reducers/appStateReducer.ts";
import { AppContextInterface } from "./types/appStateTypes.ts";
import About from "./About.tsx";

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

    useEffect(() => {
        document.body.className = appState.currentPortfolioItem
            ? "no-scroll"
            : "";
    }, [appState.currentPortfolioItem]);

    return (
        <AppContext.Provider value={{ appState, dispatchAppState }}>
            <header></header>
            <main
                style={{
                    paddingRight: appState.scrollPadding,
                }}
            >
                <Hero learnMoreRef={learnMoreRef} />
                <div ref={learnMoreRef} />
                <Nav />
                <About />
                <Portfolio />
            </main>
            <footer></footer>
        </AppContext.Provider>
    );
}

export default App;
