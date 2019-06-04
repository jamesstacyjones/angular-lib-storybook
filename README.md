# Angular 8 Library + Storybook

This sample was generated withAngular-cli.
The idea is to have an angular 8 library integrated with storybook for development.

Solving few more things which are not so obvious to solve with storybook (please refer to .storybook/webpack.config.js):

- absolute paths
- css + sass files
- multi project

For this implementation I followed some really good articles, which I would love to share:

https://peakup.org/blog/create-an-angular-component-library-w-storybook/

## Development server

Run `npm run storybook` for a dev server. Navigate to `http://localhost:6006/`. The app will automatically reload if you change any of the source files.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Build Storybook

Run `npm run build-storybook`
