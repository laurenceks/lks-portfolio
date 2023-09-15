import { Dispatch, SetStateAction } from "react";

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

export interface PortfolioMasonryItemInterface {
    item: PortfolioItemInterface;
    lightboxItemId?: number | null;
    hoverItemId?: number | null;
    showLightbox?: boolean | null;
    setPortfolioLightboxItem: Dispatch<
        SetStateAction<PortfolioLightBoxItemInterface | null>
    >;
    setHoverItemId: Dispatch<SetStateAction<number | null>>;
    setShowLightbox: Dispatch<SetStateAction<boolean>>;
    panelPosition: PanelPositionType;
}
