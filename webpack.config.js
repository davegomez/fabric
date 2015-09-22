const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./src/js/app.js",
  output: {
    path: __dirname + "/bin/",
    filename: "js/main.js"
  },
  module: {
    preLoaders: [
      {test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/},
      {test: /\.js$/, loader: "jscs-loader", exclude: /node_modules/}
    ],
    loaders: [
      {test: /\.js$/, loader: "babel-loader", exclude: /node_modules/},
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style-loader",
        "css-loader?sourceMap" +
        "!autoprefixer-loader?browsers=last 2 version" +
        "!sass-loader?outputStyle=expanded&sourceMap&sourceMapContents")
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("css/main.css", {
      allChunks: true
    }),
    new BrowserSyncPlugin({
      host: "localhost",
      port: 3000,
      server: {baseDir: ["./bin"]},
      files: ["bin/*.html"]
    })
  ]
};
