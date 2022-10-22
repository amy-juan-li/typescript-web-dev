const path = require("path");
module.exports = {
  entry: "./src/main.ts",
  output: {
    filename: "bundle.js", // all js files are bundled into this single file
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "source-map",
  devServer: {
    static: "./dist",
    port: 9000, //default port: 8080
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader", // TypeScript loader
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};
