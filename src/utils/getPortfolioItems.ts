import {
    FormattedImage,
    PortfolioCmsApiParsedResponse,
    PortfolioCmsApiParsedResponseData,
    PortfolioImg,
    PortfolioItemInterface,
} from "../types/portfolioTypes.ts";

const strapiImgToSrcSet = (img: PortfolioImg) => {
    const { formats, ...original } = img;

    const formatVariants: { url: string; width: number }[] = Object.values(
        formats ?? {}
    ).map((f: FormattedImage) => ({
        url: f.url,
        width: f.width,
    }));

    const images: Pick<FormattedImage, "url" | "width">[] = [
        ...formatVariants,
        { ...original },
    ];

    return images
        .sort((a, b) => a.width - b.width)
        .map((i) => `${i.url} ${i.width}w`)
        .join(", ");
};
const getPortfolioItems = async (): Promise<PortfolioItemInterface[]> => {
    const response = await fetch(
        "/cms/api/portfolio-items?populate=*&sort=date:desc",
        {
            method: "GET",
        }
    );

    return ((await response.json()) as PortfolioCmsApiParsedResponse).data.map(
        (item: PortfolioCmsApiParsedResponseData) => {
            const aspectRatio = item.img.width / item.img.height;

            return {
                id: item.id,
                slug: item.slug,
                title: item.title,
                projectType: item.projectType,
                media: item.media,
                client: item.client,
                date: new Date(item.date),
                blurb: item.blurb,
                url: item.url,
                imgFileName: `${item.img.url}`,
                thumbnailPath: `${item.img.formats.small.url}`,
                srcSet: strapiImgToSrcSet(item.img),
                aspectRatio,
                stack: item.stack.map((x) => x.stackItem),
                description: item.description,
                alt: item.img.alternativeText,
                extraImages:
                    item.extraImages?.map((x) => ({
                        id: x.id,
                        src: x.url,
                        srcSet: strapiImgToSrcSet(x),
                        alt: x.alternativeText,
                        caption: x.caption || "",
                    })) || [],
            };
        }
    );
};

export default getPortfolioItems;
