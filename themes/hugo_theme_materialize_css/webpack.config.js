const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'static'),
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
	MiniCssExtractPlugin.loader,
	'css-loader', 
        'sass-loader'
      ]
    }] 
  },
  plugins: [
    new MiniCssExtractPlugin({filename: 'style.css'})
  ]
};
