import fs from "fs";
import SrcSetGenerator from "@flexis/srcset";
import Vinyl from "vinyl";
import portfolioItems from "../src/data/portfolioItems";

const srcSetWidths = [1920, 1280, 860, 450];
const outDir = "./public/images/portfolio/srcset/";

const generateFilePath = (name, ext, size, srcSet = true, last = true) =>
    `portfolio/srcset/${name}@${size}w.${ext}${srcSet ? ` ${size}w` : ""}${
        last ? "" : ","
    }`;

const generateImages = async (filename) => {
    const path = `./public/images/portfolio/full/${filename}`;
    const contents = await fs.promises.readFile(path);

    const source = new Vinyl({ path, contents });
    const generator = new SrcSetGenerator.default();

    const images = generator.generate(source, { width: srcSetWidths });

    for await (const image of images) {
        process.stdout.write(
            `Writing ${image.path.replace(
                "public\\images\\portfolio\\full\\",
                ""
            )}`
        );
        await fs.promises.writeFile(
            image.path.replace("public\\images\\portfolio\\full\\", outDir),
            image.contents
        );
        process.stdout.write(` ...done\n`);
    }
};

const run = async () => {
    // clean out old images
    if (fs.existsSync(outDir)) {
        fs.rmSync(outDir, { recursive: true });
    }
    fs.mkdirSync(outDir, { recursive: true });

    for (const item of portfolioItems) {
        const [name, ext] = item.imgFileName.split(".");
        console.log(`Generating srcSet for ${name}`);

        item.srcSet = srcSetWidths.reduce(
            (acc, val, i) =>
                acc +
                generateFilePath(
                    name,
                    ext,
                    val,
                    true,
                    i === srcSetWidths.length - 1
                ),
            ""
        );

        item.thumbnailPath = generateFilePath(
            name,
            ext,
            srcSetWidths[srcSetWidths.length - 1],
            false
        );

        // want this to be ordered so suppress rule
        // eslint-disable-next-line no-await-in-loop
        await generateImages(item.imgFileName);
    }
};

run();
