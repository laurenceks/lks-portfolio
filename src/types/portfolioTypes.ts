import { Dispatch, SetStateAction } from "react";

export type PortfolioItemProjectType = "personal" | "commission" | "employment";
export type PortfolioItemMedia = "web" | "graphic" | "video";
export type StackItem =
    | "MongoDB"
    | "ReactJS"
    | "JavaScript"
    | "TypeScript"
    | "PHP"
    | "VBA"
    | "CSS"
    | "SASS"
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
    | "Express"
    | "Mapbox"
    | "Webpack"
    | "Passport"
    | "Git"
    | "Github"
    | "VSC"
    | "WebStorm"
    | "PhpStorm"
    | "Atom"
    | "Figma"
    | "Slack";

export interface PortfolioItemDescriptionItemInterface {
    title: string;
    content: string;
}
export interface PortfolioImg {
    path: string;
    title: string;
    mime: string;
    type: string;
    description: string;
    tags: string[];
    size: number;
    colors: string[];
    width: number;
    height: number;
    _hash: string;
    _created: number;
    _modified: number;
    _cby: string;
    altText: string;
    thumbhash: string;
    folder: string;
    _id: string;
}

export interface PortfolioCmsApiResponseItem {
    _cby: string;
    _created: number;
    _id: string;
    _mby: string;
    _modified: number;
    _state: number;
    blurb: null | string;
    client: null | string;
    date: string;
    description: PortfolioItemDescriptionItemInterface[];
    extraImages: null | PortfolioImg[];
    img: PortfolioImg;
    media: PortfolioItemMedia;
    projectType: PortfolioItemProjectType;
    slug: string;
    stack: null | StackItem[];
    title: string;
    url: null | string;
}

export interface PortfolioItemInterface {
    id: string;
    slug: string;
    title: string;
    projectType: PortfolioItemProjectType;
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
    extraImages: {
        id: string;
        srcSet: string;
        src: string;
        alt: string;
        caption: string;
    }[];
}

export type PanelPositionType = "none" | "left" | "right";

export interface PortfolioMasonryItemInterface {
    item: PortfolioItemInterface;
    hoverItemId?: PortfolioItemInterface["id"] | null;
    showLightbox?: boolean | null;
    setHoverItemId: Dispatch<
        SetStateAction<PortfolioItemInterface["id"] | null>
    >;
    panelPosition: PanelPositionType;
}
