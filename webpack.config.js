var path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, './src/js/index.js'),
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'main.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
        ],
    },
    plugins: [new MiniCssExtractPlugin(), new ESLintPlugin()],
    optimization: {
        minimizer: [
          `...`,
          new CssMinimizerPlugin(),
        ],
    },
}