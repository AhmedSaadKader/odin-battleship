const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    ship: "./src/gameplay/ship.js",
    gameboard: "./src/gameplay/gameboard.js",
    player: "./src/gameplay/player.js",
    mainGame: "./src/gameplay/main-game.js",
    headerComponent: "./src/initial-components/header.js",
    gameboardInitial: "./src/initial-components/gameboard-initial.js",
    mainComponent: "./src/initial-components/main-components.js",
    updateGameboardInitial:
      "./src/initial-components/updateGameboardInitial.js",
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Battleship",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "/odin-battleship/",
  },
  optimization: {
    runtimeChunk: "single",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
