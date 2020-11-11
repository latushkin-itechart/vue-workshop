const webpack = require("webpack");

module.exports = {
  filenameHashing: false,
  lintOnSave: false,
  productionSourceMap: false,

  configureWebpack: {
    plugins: [
      new webpack.ProgressPlugin((...args) => console.info(...args))
    ],
  }
}