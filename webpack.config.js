const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const path = require("path");
// require("!style!css!bootstrap/dist/css/bootstrap.css");

module.exports = {
  entry: ["babel-polyfill", "./src/server"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "server.js",
    publicPath: "/"
  },
  target: "node",
  externals: nodeExternals(),
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: `'production'`
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          plugins: ["transform-class-properties"]
        }
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["css-loader"]
      }
    ]
  }
};
