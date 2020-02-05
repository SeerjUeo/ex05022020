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
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: "file-loader",
        options: {
          publicPath: "build/"
        }
      },
      {
        loader: "image-webpack-loader",
        options: {
          mozjpeg: {
            progressive: false,
            quality: 65
          },
          optipng: {
            enabled: false
          },
          pngquant: {
            quality: "65-90",
            speed: 4
          },
          gifsicle: {
            interlaced: false
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: "file-loader",
        options: {
          publicPath: "build/"
        }
      }
    ]
  }
};