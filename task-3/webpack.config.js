var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
var TerserWebpackPlugin = require("terser-webpack-plugin");

module.exports = {
    mode: "development",
    target: "web",
    entry: path.resolve(__dirname, "src", "index.tsx"),
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ["ts-loader"],
                exclude: ["/node_modules/"],
            },
            {
                test: /\.s[ac]ss?$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
                exclude: ["/node_modules/"],
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
                exclude: ["/node_modules/"],
            },
            {
                test: [
                    /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/i,
                    /\.(png|svg|jpg|gif)$/i,
                ],
                use: ["file-loader"],
            },
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerWebpackPlugin(),
            (minimizer) => new TerserWebpackPlugin().apply(minimizer),
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        alias: {
            Assets: path.join(__dirname, "src", "assets"),
            Entity: path.join(__dirname, "src", "entity"),
            Types: path.join(__dirname, "src", "types"),
            Hooks: path.join(__dirname, "src", "hooks"),
            Utils: path.join(__dirname, "src", "utils"),
            Constants: path.join(__dirname, "src", "constants"),
            Components: path.join(__dirname, "src", "components"),
            Grid: path.join(__dirname, "src", "components", "Grid"),
            Styled: path.join(__dirname, "src", "components", "Styled"),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
            minify: {
                collapseWhitespace: true,
            },
        }),
        new MiniCssExtractPlugin(),
    ],
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "dist"),
    },
};
