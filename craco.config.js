/* eslint-disable */
module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      return {
        ...webpackConfig,
        resolve: {
          ...webpackConfig.resolve,
        },
      };
    },
  },
  devServer: {
    open: false,
    https: true,
  },
};
