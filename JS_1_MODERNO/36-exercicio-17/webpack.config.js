module.exports = {
  entry: {
    index: './src/index.js'
  },
  mode: 'production',
  output: {
    filename: '[name].min.js'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader','css-loader']
    }, {
      test: /\.js$/,
      use: ['babel-loader']
    }]
  }
}