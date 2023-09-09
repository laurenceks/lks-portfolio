// import { ReactNode } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Window = ({ headerText, children }: any) => (
    <div className={"window"}>
        <div className={"window-header"}>{headerText}</div>
        <div className={"window-icons"}></div>
        <div className={"window-content"}>{children}</div>
    </div>
);
export default Window;
