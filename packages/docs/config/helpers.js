/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path")

const PROJECT_ROOT = path.resolve(__dirname, "..")
const VERSION = require("../../core/package.json").version

module.exports = {
    PROJECT_ROOT,
    VERSION,
}
