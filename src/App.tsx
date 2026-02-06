import {
    createContext,
    useCallback,
    useEffect,
    useReducer,
    useRef,
} from "react";
import { LayoutGroup } from "framer-motion";
import Portfolio from "./components/portfolio/Portfolio.tsx";
import Nav from "./components/nav/Nav.tsx";
import {
    appStateReducer,
    initialAppState,
} from "./reducers/appStateReducer.ts";
import { AppContextInterface } from "./types/appStateTypes.ts";
import About from "./About.tsx";
import Experience from "./Experience.tsx";
import Technologies from "./Technologies.tsx";
import Hero from "./components/hero/Hero.tsx";
import Contact from "./components/contact/Contact.tsx";
import fetchPortfolioItems from "./utils/fetchPortfolioItems.ts";
import PortfolioLightbox from "./components/portfolio/PortfolioLightbox.tsx";
import PortfolioLightboxSizer from "./components/portfolio/PortfolioLightboxSizer.tsx";

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
    const lastPath = useRef<string | null>(null);

    const routeChangeHandler = useCallback(() => {
        const path = window.location.pathname;
        if (path === lastPath.current) return;
        const [section, itemSlug] = path.split("/").filter(Boolean);

        if (section === "about") {
            aboutRef.current?.scrollIntoView({ behavior: "smooth" });
        }

        if (section === "contact") {
            contactRef.current?.scrollIntoView({ behavior: "smooth" });
        }

        if (section === "portfolio") {
            const item = appState.portfolioItems.find(
                (x) => x.slug === itemSlug
            );
            if (item && item.id !== appState.currentPortfolioItem?.id) {
                dispatchAppState({
                    type: "setCurrentPortfolioItem",
                    payload: item,
                });
            } else if (!item && appState.currentPortfolioItem) {
                dispatchAppState({
                    type: "unsetCurrentPortfolioItem",
                });
            } else if (
                !item &&
                lastPath.current?.split("/").filter(Boolean)[0] !== "portfolio"
            ) {
                portfolioRef.current?.scrollIntoView({ behavior: "smooth" });
            }
        }
        lastPath.current = path;
    }, [appState.currentPortfolioItem, appState.portfolioItems]);

    useEffect(() => {
        document.body.className = appState.currentPortfolioItem
            ? "no-scroll"
            : "";
    }, [appState.currentPortfolioItem]);

    useEffect(() => {
        dispatchAppState({
            type: "fetchPortfolioItems",
        });

        fetchPortfolioItems(dispatchAppState);
    }, []);

    useEffect(() => {
        routeChangeHandler();
    }, [routeChangeHandler]);

    useEffect(() => {
        window.addEventListener("popstate", routeChangeHandler);
        return () => window.removeEventListener("popstate", routeChangeHandler);
    }, [routeChangeHandler]);

    return (
        <AppContext.Provider value={{ appState, dispatchAppState }}>
            <header></header>
            <main>
                <LayoutGroup>
                    <Hero learnMoreRef={learnMoreRef} contactRef={contactRef} />
                    <div ref={learnMoreRef} />
                    <Nav refs={[aboutRef, portfolioRef, contactRef]} />
                    <About aboutRef={aboutRef} />
                    <Experience
                        portfolioRef={portfolioRef}
                        contactRef={contactRef}
                    />
                    <Technologies />
                    <Portfolio portfolioRef={portfolioRef} />
                    <Contact contactRef={contactRef} />
                    <PortfolioLightbox />
                    <PortfolioLightboxSizer />
                </LayoutGroup>
            </main>
            <footer></footer>
        </AppContext.Provider>
    );
}

export default App;
