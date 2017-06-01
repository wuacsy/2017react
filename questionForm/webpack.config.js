var path = require("path");
  var config= {
  entry:path.resolve(__dirname, './app.jsx'),
  output:{
    path:path.resolve(__dirname, './'),
    filename:'index.js'
  },
  devServer: {
      inline: true,
      port: 5555
   },
   module: {
      loaders: [ {
         test: /\.jsx?$/,
         exclude: /node_modules/,
         loader: 'babel-loader',
         query: {
            presets: ['es2015', 'react']
         }
      }]
   }
};
module.exports = config;
