import path from 'path';
import merge from 'webpack-merge';
import common from './webpack.common';
import 'webpack-dev-server';

const cfg = merge(common('development'), {
  devServer: {
    open: true,
    static: {
      directory: path.join(__dirname, 'dist/static'),
    },
    port: 3000,
    devMiddleware: {
      writeToDisk: true,
    },
  },

  devtool: 'eval-cheap-module-source-map',
});

export default cfg;
