const path = require('path');
const HtmlPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== 'production';

console.log(devMode);

module.exports = {
    watch: devMode,
    module: {
        rules: [{
            test: /\.(sa|sc|c)ss$/,
            use: [
                devMode
                ? 'style-loader'
                : MiniCssExtractPlugin.loader,
                "css-loader",
                "sass-loader"
            ]}
        ]
    },
    plugins: [
        new HtmlPlugin(),
        new MiniCssExtractPlugin(),
    ]
};
