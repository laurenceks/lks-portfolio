import { PortfolioItemInterface } from "../types/portfolioTypes.ts";

const splitItemsIntoCols = (items: PortfolioItemInterface[]) => {
    const columnCount: number = 3;
    const columnsArray: PortfolioItemInterface[][] = [];
    for (let i: number = 0; i < columnCount; i++) {
        columnsArray.push([]);
    }
    items
        .sort((a, b) => (a.date < b.date ? 1 : -1))
        .forEach((item, i) => {
            columnsArray[i % columnCount]?.push(item);
        });
    return columnsArray;
};

export default splitItemsIntoCols;
