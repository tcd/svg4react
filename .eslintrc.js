/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 13,
        sourceType: "module",
    },
    plugins: [
        "react",
        "@typescript-eslint",
        "jsdoc",
    ],
    "overrides": [
        {
            "files": ["./packages/dev/**"], // Or *.test.js
            "rules": {
                "no-console": "off",
            },
        },
    ],
    ignorePatterns: [
        "./etc/config/**.js",
        "**/config/**/*.mjs",
        "**/node_modules",
        "**/ignore",
        "**/build",
    ],
    rules: {
        "semi": ["warn", "never"],
        "indent": ["warn", 4, { "SwitchCase": 1 }],
        "quotes": ["warn", "double", { "avoidEscape": true, "allowTemplateLiterals": true }],
        "comma-dangle": ["warn", "always-multiline"],
        "object-curly-spacing": ["warn", "always"],
        "keyword-spacing": ["warn", { "after": true }],
        "space-before-blocks": ["warn"],
        "prefer-const": ["warn", { "destructuring": "all" }],
        "no-console": "warn",
        // ---------------------------------------------------------------------
        // React
        // https://github.com/yannickcr/eslint-plugin-react
        // ---------------------------------------------------------------------
        "react/react-in-jsx-scope": "off", // we've taken care of this with webpack
        "react/prop-types": "off",
        // ---------------------------------------------------------------------
        // TypeScript
        // https://github.com/typescript-eslint/typescript-eslint
        // ---------------------------------------------------------------------
        "@typescript-eslint/no-empty-interface": ["off"],
        // "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
        "no-unused-vars": "off", // This doesn't play nice with TypeScript
        "@typescript-eslint/no-unused-vars": ["warn", { "ignoreRestSiblings": true, "argsIgnorePattern": "^_", "varsIgnorePattern": "^_" }],
        "@typescript-eslint/no-explicit-any": ["off"],
        "@typescript-eslint/type-annotation-spacing": ["warn"],
        "@typescript-eslint/ban-ts-comment": ["off"],
        "@typescript-eslint/no-empty-function": ["warn"],
        "@typescript-eslint/no-inferrable-types": ["off"],
        "@typescript-eslint/ban-types": ["warn"],
        // ---------------------------------------------------------------------
        // JsDoc
        // https://github.com/gajus/eslint-plugin-jsdoc
        // ---------------------------------------------------------------------
        "jsdoc/check-alignment":         ["warn"], // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-alignment
        "jsdoc/require-asterisk-prefix": ["warn", "always"], // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-asterisk-prefix
        "jsdoc/multiline-blocks":        ["warn", { "noZeroLineText": true, "noSingleLineBlocks": false }], // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-multiline-blocks
        "jsdoc/check-line-alignment":    ["off"], // ["warn", "always"],
        "jsdoc/check-indentation":       ["off"], // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-indentation
    },
}
