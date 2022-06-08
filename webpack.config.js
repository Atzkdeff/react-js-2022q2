const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) => ({
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "index.bundle.js"
    },
    resolve: {
        extensions: [".js", ".jsx"],
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
    devServer: {
        port: 3000,
        liveReload: true
    },
    devtool: argv.mode === "development" ? "source-map" : undefined,
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['dist']
        }),
        new webpack.ProvidePlugin({
            React: "react"
        }),
        new HtmlWebpackPlugin({ template: "./src/index.html" }),
    ],
});
