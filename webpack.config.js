// Here we have to use es5 syntax
//   1 Main use of webpack is to convert ES6 javascript to ES5 since all browsers understands es5 but not all knows es6.

// basically, consider webPack as the coordinator and see the helper as the one who actually transpiles the code to the reqiored version
// here apparently, babel is the helper library which transpiles jsx into older javascrip

module.exports = {
  module:{
    rules:[
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use:{

        }
      }
    ]
  }
}