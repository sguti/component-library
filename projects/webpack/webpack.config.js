const webpackMerge = require("webpack-merge");
const commonConfig = require("./webpack.common");

module.exports = options => {
  console.log(options);
  return webpackMerge(commonConfig, require(`./webpack.${options.env}.js`));
};
