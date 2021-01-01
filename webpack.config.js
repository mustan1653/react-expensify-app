//entry point -> output file
const path = require('path');
//const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//const CSSMinimizerPlugin = require('css-minimizer-webpack-plugin');


module.exports = ({ MODE }, { mode }) => {
  
  const isProduction = MODE === 'production';

  return {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
      rules: [{
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        use:[
          'style-loader',
          'css-loader',
          'sass-loader'
        ],
       }
      ]  
    },
    // plugins:[
    //   new MiniCssExtractPlugin({
    //     filename: 'styles.css',
    //   }),
    // ],
    // optimization: {
    //   minimize: true,
    //   minimizer: [
    //     new CSSMinimizerPlugin({
    //       sourceMap: true,
    //     }),
    //   ]
    // },
    
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
        
        }
    };
};
