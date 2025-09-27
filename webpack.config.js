const path = require('path');

module.exports = {
  target: 'node',           // Node.js target
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: 'production',
};
