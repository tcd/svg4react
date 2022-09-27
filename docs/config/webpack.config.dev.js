/* eslint-disable @typescript-eslint/no-var-requires */

const path = require("path")
const baseConfig = require("./webpack.config.base")

const { PROJECT_ROOT } = require("./helpers")
const OUT_DIR    = path.resolve(PROJECT_ROOT, "dist")

/**
 * See [Webpack Configuration docs](https://webpack.js.org/configuration/) for more information.
 *
 * @type {import("webpack").Configuration}
 */
const webpackConfig = {
    ...baseConfig,
    mode: "development",
    devtool: "inline-source-map",
    /** @type {import("webpack").Configuration} */
    devServer: {
        static: [
            {
                directory: OUT_DIR,
            },
            {
                directory: OUT_DIR,
                publicPath: "/public",
            },
        ],
        historyApiFallback: true,
        port: 6969,
        allowedHosts: "all",
        hot: true,
    },
    module: {
        rules: [
            ...baseConfig.module.rules,
            {
                enforce: "pre",
                test: /\.tsx?$/,
                use: "source-map-loader",
            },
        ],
    },
}

module.exports = webpackConfig
