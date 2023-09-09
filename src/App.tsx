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
                    <h1>Lorem ipsum</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Blanditiis libero minima nisi quaerat ut. Aliquid
                        architecto dignissimos in odio quod sed sit tempora
                        tempore temporibus vero. Dignissimos ipsum molestias
                        ullam?
                    </p>
                </HeadingGrid>
                <Portfolio />
            </main>
            <footer></footer>
        </>
    );
}

export default App;
