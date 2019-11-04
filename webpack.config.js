const path = require('path');

module.exports = {
    entry: './src/JS/index.js',
    output: {
        path: path.resolve(__dirname, 'dist/JS'),
        filename: 'bundle.js'
    },
    mode: 'development'
};