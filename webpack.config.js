module.exports = {
  // how to bundle files
  entry: ["babel-polyfill", "./src/index.js"],
  // process
  module: {
    rules: [
      // data, process
      { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ },
      { test: /\.jsx$/, loader: "babel-loader", exclude: /node_modules/ }
    ]
  },
  // destination
  output: {
    path: __dirname + "/public/bundle",
    filename: "bundle.js"
  }
};
