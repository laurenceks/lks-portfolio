import { Dispatch, SetStateAction } from "react";

export interface PortfolioItemDescriptionItemInterface {
    title: string;
    content: string;
}

export type PortfolioItemType = "personal" | "commission" | "employment";
export type PortfolioItemMedia = "web" | "graphic" | "video";
export type StackItem =
    | "MongoDB"
    | "ReactJS"
    | "JavaScript"
    | "TypeScript"
    | "PHP"
    | "CSS"
    | "HTML"
    | "Photoshop"
    | "Illustrator"
    | "Premiere Pro"
    | "Excel"
    | "SQL"
    | "GIMP"
    | "Inkscape"
    | "jQuery"
    | "MomentJS"
    | "ChartJS"
    | "NodeJS"
    | "MySQL"
    | "Express";
export interface PortfolioItemInterface {
    id: number;
    title: string;
    type: PortfolioItemType;
    media: PortfolioItemMedia;
    client: string;
    date: Date;
    stack: StackItem[];
    blurb: string;
    description: PortfolioItemDescriptionItemInterface[];
    alt: string;
    url: string;
    imgFileName: string;
    aspectRatio: number;
    srcSet: string;
    thumbnailPath: string;
}

export type PanelPositionType = "none" | "left" | "right";

export interface PortfolioMasonryItemInterface {
    item: PortfolioItemInterface;
    hoverItemId?: number | null;
    showLightbox?: boolean | null;
    setHoverItemId: Dispatch<SetStateAction<number | null>>;
    panelPosition: PanelPositionType;
}
