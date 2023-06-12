const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "typer.js",
  },
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js"],
    modules: [path.resolve(__dirname, "src")],
  },
  devServer: {
    static: {
      directory: path.join(__dirname),
    },
    compress: false,
    port: 9000,
    hot: true,
  },
  mode: "development",
};
