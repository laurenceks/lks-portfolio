export interface PortfolioItem {
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
export interface ActivePortfolioItem {
    item?: PortfolioItem;
    rect?: DOMRect;
}

export type PanelPosition = "none" | "left" | "right";
