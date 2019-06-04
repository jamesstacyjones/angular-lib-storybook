const path = require('path');
const webpack = require('webpack');

const includePath = path.resolve(__dirname, '..');
const libPath = path.resolve('projects/my-lib/src');

module.exports = {
  module: {
    rules: [
      {
        test: [/\.stories\.tsx?$/, /index\.ts$/],
        loaders: [
          {
            loader: require.resolve('@storybook/addon-storysource/loader'),
            options: {
              parser: 'typescript'
            }
          }
        ],
        include: [path.resolve(__dirname, '../src')],
        enforce: 'pre'
      },
      {
        test: /\.css$/,
        include: includePath,
        use: ['to-string-loader', 'css-loader']
      }
    ]
  },
  plugins: [
     new webpack.NormalModuleReplacementPlugin(/@my-lib\/library/, function (resource) {
        resource.request = resource.request.replace(/@my-lib\/library/, libPath);
     })
  ]
};
