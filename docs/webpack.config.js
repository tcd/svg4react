/* eslint-disable @typescript-eslint/no-var-requires */

const path = require("path")
// const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin")

const PROJECT_ROOT = "."

/**
 * See [Webpack Configuration docs](https://webpack.js.org/configuration/) for more information.
 *
 * @type {import("webpack").Configuration}
 */
const webpackConfig = {
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
        port: 8090,
        allowedHosts: "all",
        hot: true,
    },
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
        ],
    },
}

module.exports = webpackConfig
