import React from "react";
import Section from "./Section.tsx";

const SectionMaxWidth = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => (
    <Section className={className}>
        <div className={"max-width-content mx-auto"}>{children}</div>
    </Section>
);

SectionMaxWidth.defaultProps = {
    className: "",
};
export default SectionMaxWidth;
