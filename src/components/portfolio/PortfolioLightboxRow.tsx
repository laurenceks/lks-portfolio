import { ReactNode } from "react";

const PortfolioLightboxRow = ({
    label,
    children,
}: {
    label: string;
    children: ReactNode;
}) => (
    <div className={"d-flex align-items-end gap-column-2 mb-3"}>
        <p className={"portfolio-lightbox-tag"}>{label}</p>
        {children}
    </div>
);

export default PortfolioLightboxRow;
