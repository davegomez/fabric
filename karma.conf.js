var webpack = require("webpack");

module.exports = function(config) {
  config.set({
    plugins: [
      require("karma-webpack"),
      require("karma-tap"),
      require("karma-chrome-launcher"),
      require("karma-phantomjs-launcher"),
      require("karma-coverage")
    ],

    basePath: "",
    frameworks: ["tap"],
    files: ["src/test/**/*.js"],

    preprocessors: {
      "src/test/**/*.js": ["webpack"]
    },

    webpack: {
      node: {
        fs: "empty"
      },

      // Instrument code that isn"t test or vendor code.
      module: {
        loaders: [
          {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
        ],
        postLoaders: [{
          test: /\.js$/,
          exclude: /(src\/test|node_modules)\//,
          loader: "istanbul-instrumenter"
        }]
      }
    },

    webpackMiddleware: {
      noInfo: true
    },

    reporters: [
      "dots",
      "coverage"
    ],

    coverageReporter: {
      type: "text",
      dir: "coverage/"
    },

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["PhantomJS"],
    singleRun: false
  });
};
