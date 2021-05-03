const path = require("path");

const app = path.resolve(__dirname, "");
const src = path.resolve(__dirname, "src");
const dist = path.resolve(__dirname, "dist");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: src + "/index.jsx",
  output: {
    path: dist,
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: app + "/index.html",
      filename: "index.html",
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    open: true,
    hot: true,
    contentBase: path.join(__dirname, "./"),
    watchContentBase: true,
    port: 3000,
    host: "0.0.0.0",
  },
};
