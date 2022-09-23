/* eslint-disable @typescript-eslint/no-var-requires */

const path = require("path")
// const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin")
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin")

const { PROJECT_ROOT } = require("./helpers")

const APP_DIR = path.resolve(PROJECT_ROOT, "src")
const MONACO_DIR = path.resolve(PROJECT_ROOT, "node_modules", "monaco-editor")

/**
 * See [Webpack Configuration docs](https://webpack.js.org/configuration/) for more information.
 *
 * @type {import("webpack").Configuration}
 */
const webpackConfig = {
    entry: path.resolve(PROJECT_ROOT, "src", "index.tsx"),
    output: {
        path: path.resolve(PROJECT_ROOT, "dist"),
        publicPath: "/",
        filename: "bundle.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(PROJECT_ROOT, "src", "index.html"),
            hash: true,
            inject: true,
        }),
        new MonacoWebpackPlugin({
            // available options are documented at https://github.com/microsoft/monaco-editor/blob/main/webpack-plugin/README.md#options
            languages: ["javascript"],
        }),
    ],
    resolve: {
        extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
        modules: [__dirname, "src", "node_modules"],
        plugins: [
            new TsconfigPathsPlugin.TsconfigPathsPlugin(),
        ],
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/i,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                enforce: "pre",
                test: /\.tsx?$/,
                use: "source-map-loader",
            },
            {
                test: /\.css$/,
                include: APP_DIR,
                use: [{
                    loader: "style-loader",
                }, {
                    loader: "css-loader",
                    options: {
                        modules: true,
                        namedExport: true,
                    },
                }],
            },
            {
                test: /\.css$/,
                include: MONACO_DIR,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
}

module.exports = webpackConfig
