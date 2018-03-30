const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
  entry: "./dev/app.js",
  output: {
    path: path.resolve(__dirname, "./public"),
    filename: "app.bundle.js"
  },

  plugins: [
    new HtmlWebpackPlugin({
	  title: "Carousel",
	  template: './dev/templates/index.html',
    })
  ]
};
