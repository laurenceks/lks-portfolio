import { Dispatch, SetStateAction } from "react";

export interface PortfolioItemDescriptionItemInterface {
    title: string;
    content: string;
}

export interface PortfolioItemInterface {
    id: number;
    title: string;
    type: string;
    media: string;
    client: string;
    date: string;
    stack: string[];
    blurb: string;
    description: PortfolioItemDescriptionItemInterface[];
    img: string;
    thumb: string;
    thumbWidth: number;
    thumbHeight: number;
    alt: string;
    url: string;
}

export interface PortfolioLightBoxItemInterface {
    item: PortfolioItemInterface | null;
    rect: DOMRect | null;
}

export type PanelPositionType = "none" | "left" | "right";

export interface PortfolioMasonryItemInterface {
    item: PortfolioItemInterface;
    hoverItemId?: number | null;
    showLightbox?: boolean | null;
    setHoverItemId: Dispatch<SetStateAction<number | null>>;
    panelPosition: PanelPositionType;
}
