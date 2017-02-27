const path = require('path');
const webpack = require('webpack');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

module.exports = {
  context: __dirname,
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: [
      path.resolve(__dirname, 'src'),
    ],
  },
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CaseSensitivePathsPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
    ]
  },
  postcss: () => {
    return [
      require('postcss-import')({
        path: [
          path.resolve(__dirname, 'src', 'theme'),
        ],
      }),
      require('precss'),
      require('autoprefixer')
    ];
  }
};
