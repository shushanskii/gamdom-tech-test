/* eslint-disable */
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      return {
        ...webpackConfig,
        resolve: {
          ...webpackConfig.resolve,
        },
        plugins: [
          ...webpackConfig.plugins,
          new CopyWebpackPlugin({
            patterns: [
              { from: 'assets/data', to: 'data' },
            ],
          }),
        ],
      };
    },
  },
  devServer: {
    open: false,
    https: true,
  },
}
