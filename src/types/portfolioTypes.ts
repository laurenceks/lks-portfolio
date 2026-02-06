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

export interface FormattedImage {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    path: string;
    width: number;
    height: number;
    size: number;
    sizeInBytes: number;
    url: string;
}
export type FormatKey = "thumbnail" | "small" | "medium" | "large";

export type Formats = {
    [_key in FormatKey]: FormattedImage;
};

export interface PortfolioImg {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: Formats;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string;
    provider: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

export interface PortfolioCmsApiParsedResponseData {
    id: number;
    documentId: string;
    slug: string;
    title: string;
    projectType: PortfolioItemProjectType;
    media: PortfolioItemMedia;
    client: string;
    date: string;
    blurb: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    url: string;
    img: PortfolioImg;
    stack: { id: number; stackItem: StackItem }[];
    description: PortfolioItemDescriptionItemInterface[];
    extraImages: null | PortfolioImg[];
}

export interface PortfolioCmsApiParsedResponse {
    data: PortfolioCmsApiParsedResponseData[];
    meta: {
        pagination: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        };
    };
}

export interface PortfolioItemInterface {
    id: number;
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
        id: number;
        srcSet: string;
        src: string;
        alt: string;
        caption: string;
    }[];
}

export type PanelPositionType = "none" | "left" | "right";

export interface PortfolioMasonryItemInterface {
    item: PortfolioItemInterface;
    hoverItemId?: number | null;
    showLightbox?: boolean | null;
    setHoverItemId: Dispatch<SetStateAction<number | null>>;
    panelPosition: PanelPositionType;
}
