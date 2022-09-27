/* eslint-disable @typescript-eslint/no-var-requires */

const path = require("path")
const webpack = require("webpack")
const CopyPlugin = require("copy-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer")

const baseConfig = require("./webpack.config.base")
const { PROJECT_ROOT } = require("./helpers")

/**
 * See [Webpack Configuration docs](https://webpack.js.org/configuration/) for more information.
 *
 * @type {import("webpack").Configuration}
 */
const webpackConfig = {
    ...baseConfig,
    mode: "production",
    devtool: false,
    output: {
        ...baseConfig.output,
        publicPath: "/svg4react",
    },
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
        // new CopyPlugin({
        //     patterns: [
        //         {
        //             from: path.join(PROJECT_ROOT, "public/*"),
        //             to:   path.join(PROJECT_ROOT, "dist"),
        //         },
        //     ],
        // }),
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
