const webpack = require('webpack');
const DotenvPlugin = require('webpack-dotenv-plugin');


module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/js/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    }) ,
    new DotenvPlugin({
      sample: './.env',
      path: './.env'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      // -------- Main App Components --------//
      Nav: 'app/components/Nav.jsx',
      Main: 'app/components/Main.jsx',
      jQuery: 'node_modules/jquery/dist/jquery.min.js',
      // -------- Page Components --------//
      About: 'app/components/About.jsx',
      // -------- App Styles --------------//
      styles: 'app/styles/app.scss',
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
