import { useRef } from "react";
import Portfolio from "./components/portfolio/Portfolio.tsx";
import HeadingGrid from "./components/wrappers/HeadingGrid.tsx";
import Hero from "./components/hero/Hero.tsx";
import Nav from "./components/nav/Nav.tsx";

function App() {
    const learnMoreRef = useRef(null);
    return (
        <>
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
                <Portfolio />
            </main>
            <footer></footer>
        </>
    );
}

export default App;
