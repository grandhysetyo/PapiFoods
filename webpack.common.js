const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: '[name].[contenthash].js',      
    },    
    module: {
      rules: [  
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/,
            use: [
                'file-loader',
            ],
        },              
        {
            test: /\.(sass|scss|css)$/,
            use: [MiniCssExtractPlugin.loader,'css-loader','sass-loader']
        }               
      ]
    },
    /* plugin */
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
        new CleanWebpackPlugin(),
        /* HTML Webpack Plugin */
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        }), 
        new HtmlWebpackPlugin({
            template: "./src/result.html",
            filename: "result.html"
        }),
        new HtmlWebpackPlugin({
            template: "./src/category.html",
            filename: "category.html"
        }), 
        new HtmlWebpackPlugin({
            template: "./src/list.html",
            filename: "list.html"
        }), 
        new HtmlWebpackPlugin({
            template: "./src/detail.html",
            filename: "detail.html"
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/assets'),
                    to: path.resolve(__dirname, 'dist/assets')
                }
            ]
        })
    ]
  }