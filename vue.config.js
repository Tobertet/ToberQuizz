module.exports = {
  configureWebpack: function (config) {
    config.module.rules = [
      ...config.module.rules,
      {
        test: /\.wasm$/,
        // Tells WebPack that this module should be included as
        // base64-encoded binary file and not as code
        loader: "base64-loader",
        // Disables WebPack's opinion where WebAssembly should be,
        // makes it think that it's not WebAssembly
        //
        // Error: WebAssembly module is included in initial chunk.
        type: "javascript/auto",
      },
    ];
  },
};
