const path = require('path');
const HtmlPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin')

const devMode = process.env.NODE_ENV !== 'production';

const config = {
    watch: devMode,
    entry: ['./src/css/layout.scss', './src/index.js'],
    output: {
        filename: devMode ? '[name].js' : '[name].[chunkhash].js'
    },
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
        new MiniCssExtractPlugin({
            filename: devMode ? '[name].css' : '[name].[chunkhash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[chunkhash].css',
        }),
        new CleanWebpackPlugin(['dist'], {
            root: path.resolve('./'),
            verbose: true,
            dry: false,
        }),
    ]
};

module.exports = config
