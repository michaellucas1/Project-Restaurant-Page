// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const json5 = require('json5');//Customize parser of JSON modules

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles:["./src/template.html", "./src/styles/index.css"],
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: "./src/template.html",
    }),
  ],
  module: {
    rules:[
        {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],

        },
        {//Customize parser of JSON modules
          //command to run
          //npm install toml yamljs json5 --save-dev
          test: /\.json5$/i,
          type: 'json',
          parser: {
            parse: json5.parse,
          },
        },
    ],
  },
};
