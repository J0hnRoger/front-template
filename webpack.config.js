const path = require('path');
const HtmlPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin')

const devMode = process.env.NODE_ENV !== 'production';

const config = {
    watch: devMode,
    entry: ['./src/css/layout.scss', './src/index.ts'],
    output: {
        filename: devMode ? '[name].js' : '[name].[chunkhash].js'
    },
    resolve: {
        extensions: ['.ts', '.js', '.json']
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
            ]},
            {
                test: /\.(png|gif|jpe?g|svg)(\?.*)?$/,
                use: [{
                    loader : 'url-loader',
                    options: {
                        limit: 8192,
                        name: '[name].[hash:4].[ext]'
                    }
                },
                {
                    loader: 'img-loader',
                    options: {
                        enabled: !devMode,
                    }
                }]
            }, {
                test: /\.(woff2?|eot|ttf|otf|wav)(\?.*)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
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
