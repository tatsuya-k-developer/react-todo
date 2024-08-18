import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { Configuration, DefinePlugin } from 'webpack';

const common: (mode?: 'development' | 'production') => Configuration = (
  mode?: 'development' | 'production'
) => ({
  mode: mode || 'development',
  entry: {
    main: './src/index.tsx',
  },
  output: {
    filename: 'js/[name].js',
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/assets/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: `styles.[contenthash].css`,
    }),
    new CleanWebpackPlugin(),
    new DefinePlugin({
      PRODUCTION_MODE: mode == 'production' ? true : false,
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        use: ['babel-loader', 'ts-loader'],
      },
      {
        test: /\.(c|sc|sa)ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
  },

  target: ['web', 'es5'],
});

export default common;
