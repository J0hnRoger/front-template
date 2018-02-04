// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

const path = require('path');
const webpack = require('webpack');

const SRC_PATH = path.join(__dirname, '../src');
const STORIES_PATH = path.join(__dirname, '../stories');

module.exports = {
    module: {
      rules: [
        {
            test: /\.tsx?$/,
            loader: 'awesome-typescript-loader',
            include: [
                SRC_PATH,
                STORIES_PATH
            ]
        },
        {
            test: /\.(jpg|png|svg)$/,
            loader: 'file-loader',
            include: SRC_PATH
        },
        {
            test: /\.css$/,
            use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
            include: SRC_PATH
        },
        {
          test: /(.scss|.css)$/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader'
            },
            {
              loader: 'sass-loader', options: {
                includePaths: ['./node_modules', './node_modules/grommet/node_modules']
              }
            }
          ]
        },
      ]
  },
  resolve: {
    alias: {
      themes: path.resolve(__dirname, './ClientApp/css'),
      // Les Alias spécifiés dans le tsconfig doivent aussi être repris ici pour permettre à WebPack de les remplacer (le plugin TsConfigPathsPlugin ne fonctionne pas)
      "@src": path.resolve(__dirname, '../src'),
      "@components": path.resolve(__dirname, "../src/components"),
      "@entities": path.resolve(__dirname, "../src/entities"),
      "@features": path.resolve(__dirname, "../src/features"),
      "@store": path.resolve(__dirname, "../src/store"),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    enforceExtension: false
  },
  externals: {
    'jsdom': 'window',
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': 'window',
    'react/addons': true,
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default'],
      // In case you imported plugins individually, you must also require them here:
      Util: "exports-loader?Util!bootstrap/js/dist/util",
      Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
    })
  ]
};
