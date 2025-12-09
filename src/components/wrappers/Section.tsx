import { ReactNode } from "react";

const Section = ({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) => (
    <section className={`px-3 py-4 py-sm-7 ${className}`}>{children}</section>
);

Section.defaultProps = {
    className: "",
};
export default Section;
