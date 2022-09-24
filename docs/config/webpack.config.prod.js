/* eslint-disable @typescript-eslint/no-var-requires */

const baseConfig = require("./webpack.config.base")
const webpack = require("webpack")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer")
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;


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
        new CleanWebpackPlugin(),
        new BundleAnalyzerPlugin(),
        new webpack.ProgressPlugin({
            // activeModules: false,
            // entries: true,
            // handler(percentage, message, ...args) {
            //     // custom logic
            // },
            // modules: true,
            // modulesCount: 5000,
            // profile: false,
            // dependencies: true,
            // dependenciesCount: 10000,
            percentBy: "entries",
        }),
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    enforce: true,
                    chunks: "all",
                },
            },
        },
    },
}

module.exports = webpackConfig
