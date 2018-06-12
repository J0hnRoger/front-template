const path = require('path');
const HtmlPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    module: {
        rules: [
            {
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader"
            ]
            }
        ]
    },
    plugins: [
        new HtmlPlugin(),
        new MiniCssExtractPlugin(),
    ]
};