'use strict';
const path = require('path');

const banner =
    '/*!\n' +
    ' * Vue.js v\n' +
    ' * (c) 2014-' + new Date().getFullYear() + ' Evan You\n' +
    ' * Released under the MIT License.\n' +
    ' */'


export default {
    input: path.resolve(__dirname, './src/main.js'),
    output: {
        file: path.resolve(__dirname, './dist/bundle.js'),
        banner: banner,
        format: 'umd',
        name: "jQuery"
    }
}