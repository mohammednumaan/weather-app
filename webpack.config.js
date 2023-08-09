const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  plugins: [
    new Dotenv(),
  ],
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};