import { ReactNode } from "react";
import SectionMaxWidth from "./SectionMaxWidth.tsx";

const HeadingGrid = ({
    className,
    children,
}: {
    className?: string;
    children: ReactNode;
}) => (
    <SectionMaxWidth className={`heading-grid ${className}`}>
        <div className={"max-width-sm"}>{children}</div>
    </SectionMaxWidth>
);

HeadingGrid.defaultProps = {
    className: "",
};
export default HeadingGrid;
