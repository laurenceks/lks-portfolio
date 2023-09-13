export interface PortfolioItemInterface {
    id: number;
    title: string;
    description: string;
    type: string;
    media: string;
    date: string;
    image: string;
    imageAlt: string;
    url: string;
}
export interface PortfolioLightBoxItemInterface {
    item?: PortfolioItemInterface | null;
    rect?: DOMRect | null;
}

export type PanelPositionType = "none" | "left" | "right";

export interface PortfolioItemExpandedInterface {
    left?: number;
    top?: number;
    width?: number;
    height?: number;
    position?: "fixed" | "absolute";
    expanded: boolean;
}
