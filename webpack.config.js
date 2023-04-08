const path = require('path');

module.exports = {
  entry: './src/index.js', // change this to the entry file of your app
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    fallback: {
      "buffer": require.resolve("buffer/")
    }
  },
  module: {
    rules: [
      // add any necessary rules for your app's code
      // (e.g., for transpiling or bundling)
    ]
  },
  node: {
    Buffer: true
  }
};
