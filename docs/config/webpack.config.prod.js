/* eslint-disable @typescript-eslint/no-var-requires */

const baseConfig = require("./webpack.config.base")

/**
 * See [Webpack Configuration docs](https://webpack.js.org/configuration/) for more information.
 *
 * @type {import("webpack").Configuration}
 */
const webpackConfig = {
    ...baseConfig,
    mode: "production",
    devtool: false,
    plugins: [
        ...baseConfig.plugins,
        new BundleAnalyzerPlugin(),
    ],
}

module.exports = webpackConfig
