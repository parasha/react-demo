const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");//提取css到单独文件的插件
const htmlWebpackPlugin = require('html-webpack-plugin');


const resolve = (url) => path.resolve(__dirname, url);

const optimization = require('./splitChunks')

const config = {
  // 入口
  entry: {
    // main: resolve('../src/app.js'),
    main: resolve('../src/index.tsx'),
  },
  output: {
    path: resolve('../dist'),
    filename: 'js/[name].[hash:8].js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.(tsx|ts)?$/, loader: "awesome-typescript-loader" },
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.(less|css)$/,
        // exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { modules: true, } },
          'postcss-loader',
          { loader: 'less-loader', options: { lessOptions: { javascriptEnabled: true } } },
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)?$/,
        loader: 'file-loader',
        options: {
          name: 'font/[name].[hash:6].[ext]',
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          name: 'images/[path]/[name].[hash:6].[ext]',
        }
      },
    ]
  },
  optimization,
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].[hash:6].css",//都提到build目录下的css目录中
    }),
    new htmlWebpackPlugin({
      inject: true,
      template: resolve('./index.html'),
      title: 'react demo',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': resolve('../src'),
    }
  },
}


module.exports = config;