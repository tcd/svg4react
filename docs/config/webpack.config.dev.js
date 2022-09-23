/* eslint-disable @typescript-eslint/no-var-requires */

// const { PROJECT_ROOT } = require("./helpers")

const baseConfig = require("./webpack.config.base")

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
        // static: [
        //     {
        //         directory: path.join(PROJECT_ROOT, "dist"),
        //     },
        //     {
        //         directory: path.join(PROJECT_ROOT, "src", "assets"),
        //         publicPath: "/public",
        //     },
        // ],
        historyApiFallback: true,
        port: 6969,
        allowedHosts: "all",
        hot: true,
    },
}

module.exports = webpackConfig
