module.exports = {
  devServer: {
    // Get rid of nginx error: Invalid Host header
    // https://stackoverflow.com/questions/43619644/i-am-getting-an-invalid-host-header-message-when-connecting-to-webpack-dev-ser/43621275#43621275
    disableHostCheck: true,
  },
};
