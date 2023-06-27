const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//const sassLoader = require("sass-loader");

module.exports = {
  mode: "none",
  entry: {
    app: ["@babel/polyfill", "./src/app/index.js"],
    register: ["@babel/polyfill", "./src/app/register.js"],
    wsp: ["@babel/polyfill", "./src/app/wsp.js"],
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "js/[name].bundle.js",
  },
  devServer: {
    port: 5050,
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        loader: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      //   hash: true,
      //   template: "./src/index.html",
      //   minify: {
      //     collapseWhitespace: true,
      //     removeComments: true,
      //     removeRedundantAttributes: true,
      //     removeScriptTypeAttributes: true,
      //     removeStyleLinkTypeAttributes: true,
      //     useShortDoctype: true,
      //   },

      filename: "index.html",
      template: "./src/index.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
      chunks: ["app"],
    }),
    new HTMLWebpackPlugin({
      filename: "register.html",
      template: "./src/register.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
      chunks: ["register"],
    }),
    new HTMLWebpackPlugin({
      filename: "wsp.html",
      template: "./src/wsp.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
      chunks: ["wsp"],
    }),
    new MiniCssExtractPlugin({
      filename: "css/app.bundle.css",
    }),
  ],
};
