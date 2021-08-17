const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: 'bundle.js',
      assetModuleFilename: 'images/[hash][ext][query]'
    },    
    module: {
      rules: [        
        {
            test: /\.(sass|scss|css)$/,
            use: ['style-loader','css-loader','sass-loader']
        },
        {
            test: /\.html$/,
            use: ['html-loader']
        }        
      ]
    },
    /* plugin */
    plugins: [
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
    ]
  }