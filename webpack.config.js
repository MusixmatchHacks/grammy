var path = require('path');
module.exports = {
  node: {
    fs: "empty"
  },
  resolve: {
    root: [path.resolve(__dirname, 'app'), path.resolve(__dirname, 'node_modules'), path.resolve(__dirname, 'app/scripts'), path.resolve(__dirname, 'app/styles'), path.resolve(__dirname, 'bower_components')],
    extensions: ['', '.js', '.json', '.coffee'],
    alias: {
      "eventEmitter/EventEmitter": "wolfy87-eventemitter",
      jQuery: "jquery"
    }
  },
  entry: {
    // path: path.resolve(__dirname, 'src/scripts'),
    filename: "main.js",
    // html: "./index.html"
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "/scripts/bundle.js",
    // publicPath: "/src/"
  },
  module: {
    loaders: [{
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      // {
      //   test: /\.(png|jpg)$/,
      //   loader: 'url-loader?limit=8192'
      // },
      {
        test: /\.(png|jpg)$/,
        loader: "file-loader?name=images/[name].[ext]",
      },
      // {
      //   test: /\.(woff|woff2)$/,
      //   loader: "url-loader?limit=10000&mimetype=application/font-woff"
      // },
      // {
      //   test: /\.ttf$/,
      //   loader: "file-loader"
      // }, {
      //   test: /\.eot$/,
      //   loader: "file-loader"
      // },
      // {
      //   test: /\.svg$/,
      //   loader: "file-loader"
      // },
      // {
      //   test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      //   loader: "url-loader?limit=10000&minetype=application/font-woff"
      // },
      {
        test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader?name=fonts/[name].[ext]"
      }, {
        test: /\.html$/,
        loader: "file-loader?name=[name].[ext]",
      },
      // {
      //   test: /\.(wav|mp3)$/,
      //   loader: 'file-loader'
      // }
    ]
  },
  devServer: {
    contentBase: "./src/",
    hot: true,
    progress: true,
    colors: true,
    watch: true,
    // inline:true
  },

};
