var path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/js/script.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "script.js"
  },
  module: {
    rules: [{
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
};