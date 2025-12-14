import { PortfolioItemInterface } from "../types/portfolioTypes.ts";

const splitItemsIntoCols = (
    items: PortfolioItemInterface[],
    columnCount: number = 3
) => {
    const columnsArray: PortfolioItemInterface[][] = [];
    for (let i: number = 0; i < columnCount; i++) {
        columnsArray.push([]);
    }
    items.forEach((item, i) => {
        columnsArray[i % columnCount]?.push(item);
    });
    return columnsArray;
};

export default splitItemsIntoCols;
