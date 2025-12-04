/* eslint-disable no-param-reassign */
import fs from "fs";
// eslint-disable-next-line import/no-extraneous-dependencies
import SrcSetGenerator from "@flexis/srcset";
// eslint-disable-next-line import/no-extraneous-dependencies
import Vinyl from "vinyl";
import portfolioItems from "../src/data/portfolioItems.ts";

const srcSetWidths = [1920, 1280, 860, 450];
const outDir = "./public/images/portfolio/srcset/";

async function generateImages(filename) {
    const path = `./public/images/portfolio/full/${filename}`;
    const contents = await fs.promises.readFile(path);
    const source = new Vinyl({
        path,
        contents,
    });
    const srcSet = new SrcSetGenerator.default();
    const images = srcSet.generate(source, {
        width: srcSetWidths,
    });

    for await (const image of images) {
        await fs.promises.writeFile(
            image.path.replace("public\\images\\portfolio\\full\\", outDir),
            image.contents
        );
    }
}

const generateFilePath = (name, ext, size, srcSet = true, last = true) =>
    `portfolio/srcset/${name}@${size}w.${ext}${srcSet ? ` ${size}w` : ""}${
        last ? "" : ","
    }`;

// clean out old images
if (fs.existsSync(outDir)) {
    fs.rmSync(outDir, { recursive: true });
}
fs.mkdirSync(outDir);

portfolioItems.forEach((x, i) => {
    const [name, ext] = x.imgFileName.split(".");
    x.srcSet = srcSetWidths.reduce(
        (acc, val, j) =>
            acc +
            generateFilePath(
                name,
                ext,
                val,
                true,
                j >= srcSetWidths.length - 1
            ),
        ""
    );
    x.thumbnailPath = generateFilePath(
        name,
        ext,
        srcSetWidths[srcSetWidths.length - 1],
        false
    );
    generateImages(x.imgFileName);
});
