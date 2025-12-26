import {
    FormattedImage,
    PortfolioCmsApiParsedResponse,
    PortfolioCmsApiParsedResponseData,
    PortfolioItemInterface,
} from "../types/portfolioTypes.ts";

const getPortfolioItems = async (): Promise<PortfolioItemInterface[]> => {
    try {
        const response = await fetch(
            "/cms/api/portfolio-items?populate=*&sort=date:desc",
            {
                method: "GET",
            }
        );

        return (
            (await response.json()) as PortfolioCmsApiParsedResponse
        ).data.map((item: PortfolioCmsApiParsedResponseData) => {
            const { formats, ...original } = item.img;

            const formatVariants: { url: string; width: number }[] =
                Object.values(formats ?? {}).map((f: FormattedImage) => ({
                    url: f.url,
                    width: f.width,
                }));

            const images: Pick<FormattedImage, "url" | "width">[] = [
                ...formatVariants,
                { ...original },
            ];

            const srcSet = images
                .sort((a, b) => a.width - b.width)
                .map((i) => `/cms${i.url} ${i.width}w`)
                .join(", ");

            const aspectRatio = item.img.width / item.img.height;

            return {
                id: item.id,
                title: item.title,
                projectType: item.projectType,
                media: item.media,
                client: item.client,
                date: new Date(item.date),
                blurb: item.blurb,
                url: item.url,
                imgFileName: `/cms${item.img.url}`,
                thumbnailPath: `/cms${item.img.formats.small.url}`,
                srcSet,
                aspectRatio,
                stack: item.stack.map((x) => x.stackItem),
                description: item.description,
                alt: original.alternativeText,
            };
        });
    } catch (_e) {
        // something went wrong - return empty array to prevent crash
        console.error("Unable to fetch portoflio content");
        return [];
    }
};

export default getPortfolioItems;
