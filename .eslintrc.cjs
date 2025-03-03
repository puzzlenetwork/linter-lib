const { configure, presets } = require("eslint-kit");

module.exports = configure({
    presets: [presets.prettier(), presets.typescript()],
    extend: {
        plugins: ["import"],
        rules: {
            "no-console": ["warn", { allow: ["error"] }],
            "react/jsx-no-bind": "off",
            "@typescript-eslint/consistent-type-definitions": "off",
            curly: ["warn"],
            "import/no-cycle": "warn",
            "@typescript-eslint/no-explicit-any": "off",
            "import/no-default-export": "off",
        },
    },
});
