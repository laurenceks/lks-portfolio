const fs = require("fs");
const { globSync } = require("glob");

let str = "";
const tsxFiles = globSync("**/*.tsx", { ignore: "node_modules/**" });

tsxFiles.forEach((file) => {
    str += fs.readFileSync(file, "utf-8");
});

fs.writeFileSync(__dirname + "/src/components/hero/typingBackgroundContent.txt", str);
