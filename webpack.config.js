const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) => {
  const hash = argv.mode === 'production' ? '.[hash]' : '';

  const config = {
    mode: argv.mode === 'production' ? 'production' : 'development',
    output: {
      filename: `js/[name]${hash}.js`,
    },
    module: {
      rules: [
        {
          test: /(manifest\.webmanifest|browserconfig\.xml)$/,
          use: [
            { loader: 'file-loader' },
            { loader: 'app-manifest-loader' },
          ],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/i,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' },
            { loader: 'postcss-loader' },
          ],
        },
      ],
    },
    resolve: {
      alias: {
        css: path.resolve(__dirname, 'src/css'),
        img: path.resolve(__dirname, 'src/img'),
      },
      extensions: ['.js', '.json'],
    },
    devServer: {
      host: '0.0.0.0',
      port: 80,
      hot: true,
      historyApiFallback: true,
    },
    devtool: 'inline-source-map',
    plugins: [
      new ESLintPlugin(),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/index.html'),
      }),
    ],
  };

  return config;
};
