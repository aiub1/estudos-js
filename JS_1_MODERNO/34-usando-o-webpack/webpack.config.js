module.exports = {
  entry: {
    main: './src/index.js'
  },
  mode: 'development',
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
  }]
}
}