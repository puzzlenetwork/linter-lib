import { configure } from "eslint-kit";
import path from "path";

module.exports = configure({
    extends: require(path.resolve(__dirname, "../.eslintrc.cjs")),
});
