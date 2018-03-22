'use strict';
const path = require('path');
const babel = require('rollup-plugin-babel');

const banner =
    '/*!\n' +
    ' * jQuery v\n' +
    ' * (c) 2014-' + new Date().getFullYear() + ' H_VK\n' +
    ' * Released under the MIT License.\n' +
    ' */'


export default {
    input: path.resolve(__dirname, './src/main.js'),
    output: {
        file: path.resolve(__dirname, './dist/bundle.js'),
        banner: banner,
        format: 'umd',
        name: "jQuery"
    },
    plugins: [
        babel({
            exclude: 'node_modules/**' // 忽略 node_modules 下的编码
        })
    ]
}