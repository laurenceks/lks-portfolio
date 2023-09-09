import React from "react";

const Section = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => (
    <section className={`px-3 py-7 py-sm-4 ${className}`}>{children}</section>
);

Section.defaultProps = {
    className: "",
};
export default Section;
