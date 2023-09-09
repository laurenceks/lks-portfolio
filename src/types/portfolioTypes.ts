export interface PortfolioItem {
    id: string;
    title: string;
    description: string;
    type: string;
    url: string;
    ap: number;
}
export interface ActiveItem {
    item?: PortfolioItem;
    target?: HTMLDivElement;
}
