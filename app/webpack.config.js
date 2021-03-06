const path = require("path");

const app = path.resolve(__dirname, "");
const src = path.resolve(__dirname, "src");
const dist = path.resolve(__dirname, "dist");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const environment = process.env.NODE_ENV || "development";

module.exports = {
  entry: src + "/index.tsx",
  output: {
    path: dist,
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.ts|.tsx$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/preset-env",
            "@babel/preset-react",
            "@babel/preset-typescript",
          ],
          plugins: ["@babel/plugin-transform-runtime"],
        },
      },
      {
        test: /\.scss|.css$/,
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
      {
        test: /\.(jpg|png)$/,
        loader: "url-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: app + "/public/index.html",
      filename: "index.html",
    }),
  ],
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
    alias: {
      config$: path.resolve(__dirname, `config/${environment}.ts`),
    },
  },
  devServer: {
    open: true,
    hot: true,
    contentBase: path.join(__dirname, "./assets"),
    watchContentBase: true,
    port: 3000,
    host: "0.0.0.0",
  },
};
