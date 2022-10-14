module.exports = {
    "loader": "ts-node/esm",
    extension: ["js", "ts", "tsx"],
    ignore: [
        "**/build/**",
        "**/node_modules/**",
        // Mocha seems to ignore .next anyway (maybe because dotfiles?).
        // We're leaving this to make sure.
        "docs/.next/**",
    ],
}
