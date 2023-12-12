import { ReactNode } from "react";

const HeroStageDiv = ({
    className,
    children,
}: {
    className?: string;
    children: ReactNode;
}) => (
    <div
        className={`${className} d-grid z-1 align-items-center justify-content-center w-100 m-none`}
    >
        {children}
    </div>
);

export default HeroStageDiv;
