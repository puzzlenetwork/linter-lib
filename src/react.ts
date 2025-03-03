import { configure, presets } from "eslint-kit";
import path from "path";

module.exports = configure({
    presets: [presets.react({ version: "18.0" })] as any,
    extends: require(path.resolve(__dirname, "./index.js")),
});
