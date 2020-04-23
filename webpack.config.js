// Here we have to use es5 syntax
//   1 Main use of webpack is to convert ES6 javascript to ES5 since all browsers understands es5 but not all knows es6.

// basically, consider webPack as the coordinator and see the helper as the one who actually transpiles the code to the reqiored version
// here apparently, babel is the helper library which transpiles jsx into older javascrip

const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // this is gonna be lookin in the root directory for a file called babel rc
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"], // evaluated from right to left
        // css loader is used first
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
        },
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
};

// We are installing
// babel core,
// babel preset-env specifically for transpiling es6 to es5
// babel preset react specifically for react
// babel loader just for the babel loader for webpack
