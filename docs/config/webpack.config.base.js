/* eslint-disable @typescript-eslint/no-var-requires */

const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin")
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin")

const { PROJECT_ROOT } = require("./helpers")

const APP_DIR    = path.resolve(PROJECT_ROOT, "src")
const MONACO_DIR = path.resolve(PROJECT_ROOT, "node_modules", "monaco-editor")

// const linkedDir = path.resolve(__dirname, "../../src")
// console.log(linkedDir)

const babelConfig = {
    "presets": [
        "@babel/preset-env",
        "@babel/preset-typescript",
        ["@babel/preset-react", { "runtime": "automatic" }],
    ],
    "plugins": [
        "@babel/plugin-transform-runtime",
    ],
}

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
    //     filename: "bundle.js",
    // },
    output: {
        path: path.resolve(PROJECT_ROOT, "dist"),
        publicPath: "/",
        // filename: isDev ? "[name].dist.js" : "[name].[chunkhash:8].dist.js",
        filename: "[name].js",
        assetModuleFilename: "assets/[hash][ext][query]",
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
        new webpack.ProvidePlugin({
            process: "process/browser.js", // https://github.com/orgs/remarkjs/discussions/903#discussioncomment-1646344
            Buffer: ["buffer", "Buffer"],
        }),
    ],
    resolve: {
        extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
        modules: [__dirname, "src", "node_modules"],
        plugins: [
            new TsconfigPathsPlugin.TsconfigPathsPlugin(),
        ],
        fallback: {
            path: require.resolve("path-browserify"),
        },
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/i,
                exclude: [
                    /node_modules/,
                    // linkedDir,
                ],
                use: [
                    {
                        loader: "babel-loader",
                        options: babelConfig,
                    },
                ],
            },
            // {
            //     // https://github.com/orgs/remarkjs/discussions/903#discussioncomment-3405559
            //     test: /\.mjs$/,
            //     include: /node_modules/,
            //     type: "javascript/auto",
            //     resolve: {
            //         fullySpecified: false,
            //     },
            // },
            {
                test: /\.s?css$/,
                include: APP_DIR,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        // https://webpack.js.org/loaders/sass-loader/
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                            // Prefer `dart-sass`
                            implementation: require.resolve("sass"),
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                include: MONACO_DIR,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(txt)$/,
                type: "asset/source",
            },
            {
                test: /\.md$/i,
                use: [
                    {
                        loader: "raw-loader",
                        options: {
                            esModule: false,
                        },
                    },
                ],
            },
        ],
    },
}

module.exports = webpackConfig
