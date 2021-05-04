const path = require("path");

const app = path.resolve(__dirname, "");
const src = path.resolve(__dirname, "src");
const dist = path.resolve(__dirname, "dist");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: src + "/index.tsx",
  output: {
    path: dist,
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["@babel/plugin-transform-runtime"],
        },
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader", // creates style nodes from JS strings
          },
          {
            loader: "css-loader", // translates CSS into CommonJS
          },
          {
            loader: "sass-loader", // compiles Sass to CSS
          },
        ],
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
    extensions: [".js", ".tsx"],
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
