import { ScrollIntoViewRefType } from "../../types/heroTypes.ts";
import NavButtons from "./NavButtons.tsx";

const Nav = ({ refs }: { refs: ScrollIntoViewRefType[] }) => (
    <nav>
        <img src={"logo.svg"} alt={"Laurence Summers Web Development"} />
        <div className="nav-menu d-md-none">Menu</div>
        <div className="nav-buttons d-grid grid-stack">
            <NavButtons refs={refs} />
            <div className={"nav-background-mobile-container"}>
                <div className={"nav-background-mobile"}></div>
            </div>
        </div>
        <div className={"nav-background"}></div>
    </nav>
);

export default Nav;
