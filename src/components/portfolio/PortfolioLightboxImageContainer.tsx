import { ReactNode } from "react";

const PortfolioLightboxImageContainer = ({
    children,
}: {
    children: ReactNode;
}) => (
    <div
        className="p-3 pe-lg-none d-flex"
        style={{
            maxHeight: "100vh",
            alignItems: "center",
            justifyContent: "center",
        }}
    >
        {children}
    </div>
);
export default PortfolioLightboxImageContainer;
