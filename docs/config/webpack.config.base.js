/* eslint-disable @typescript-eslint/no-var-requires */

const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin")
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin")

const { PROJECT_ROOT } = require("./helpers")

const APP_DIR    = path.resolve(PROJECT_ROOT, "src")
const MONACO_DIR = path.resolve(PROJECT_ROOT, "node_modules", "monaco-editor")

/**
 * See [Webpack Configuration docs](https://webpack.js.org/configuration/) for more information.
 *
 * @type {import("webpack").Configuration}
 */
const webpackConfig = {
    entry: path.resolve(PROJECT_ROOT, "src", "index.tsx"),
    // output: {
    //     path: path.resolve(PROJECT_ROOT, "dist"),
    //     publicPath: "/",
    //     // filename: "bundle.js",
    // },
    output: {
        path: path.resolve(PROJECT_ROOT, "dist"),
        publicPath: "/",
        // filename: isDev ? "[name].dist.js" : "[name].[chunkhash:8].dist.js",
        filename: "[name].js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(PROJECT_ROOT, "src", "index.html"),
            hash: true,
            inject: true,
        }),
        new MonacoWebpackPlugin({
            // available options are documented at https://github.com/microsoft/monaco-editor/blob/main/webpack-plugin/README.md#options
            // if no languages are specified, all are included
            languages: [
                "css",
                "html",
                "javascript",
                "typescript",
                // "json",
                // "scss",
                "xml",
            ],
        }),
        new webpack.ProvidePlugin({ process: "process/browser", Buffer: ["buffer", "Buffer"] }),
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
                test: /\.css$/,
                include: APP_DIR,
                use: [
                    "style-loader",
                    "css-loader",
                ],
            },
            {
                test: /\.css$/,
                include: MONACO_DIR,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.txt$/,
                type: "asset/source",

            },
        ],
    },
}

module.exports = webpackConfig
