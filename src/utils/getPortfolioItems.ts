import {
    PortfolioCmsApiResponseItem,
    PortfolioImg,
    PortfolioItemInterface,
} from "../types/portfolioTypes.ts";

const srcSetWidths = [1920, 1280, 860, 450];

const generateCockpitResizePath = (img: PortfolioImg, width: number) =>
    `/cms/api/assets/image/${img._id}?o=1&m=resizeToWidth&w=${width}`;
const cockpitImgToSrcSet = (img: PortfolioImg) =>
    srcSetWidths
        .map((width) => `${generateCockpitResizePath(img, width)} ${width}w`)
        .join(", ");
const getPortfolioItems = async (): Promise<PortfolioItemInterface[]> => {
    const response = await fetch(
        `/cms/api/content/items/portfolio?sort={"date":-1}`,
        {
            method: "GET",
        }
    );

    return ((await response.json()) as PortfolioCmsApiResponseItem[]).map(
        (item: PortfolioCmsApiResponseItem) => {
            const aspectRatio = item.img.width / item.img.height;

            return {
                id: item._id,
                slug: item.slug,
                title: item.title,
                projectType: item.projectType,
                media: item.media,
                client: item.client || "",
                date: new Date(item.date),
                blurb: item.blurb || "",
                url: item.url,
                repo: item.repo,
                imgFileName: `${item.img.path}`,
                thumbnailPath: generateCockpitResizePath(item.img, 450),
                srcSet: cockpitImgToSrcSet(item.img),
                aspectRatio,
                stack: item.stack || [],
                description: item.description,
                alt: item.img.altText,
                extraImages:
                    item.extraImages?.map((x) => ({
                        id: x._id,
                        src: x.path,
                        srcSet: cockpitImgToSrcSet(x),
                        alt: x.altText,
                        caption: x.description || "",
                    })) || [],
            };
        }
    );
};

export default getPortfolioItems;
