const PortfolioInfoPanelRow = ({
    label,
    value,
}: {
    label: string;
    value: string;
}) => (
    <>
        <p className={"fs-italic smaller"}>{label}</p>
        <p className={"smaller"}>{value}</p>
    </>
);

export default PortfolioInfoPanelRow;
