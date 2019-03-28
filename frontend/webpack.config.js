const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: './js-files/project-main.js',
  mode: 'development',
  module: {
  rules: [
    {
      loader: ['vue-style-loader', 'css-loader'],
      test: /\.css$/
    },
    {
      loader: 'vue-loader',
      test: /\.vue$/
    },
    {
      loader: 'file-loader',
      test: /\.(gif|jpe?g|png|svg)$/
    }
  ],
},
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js',
    }
  }
}
