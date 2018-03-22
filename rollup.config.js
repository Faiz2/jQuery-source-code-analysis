"use strict";
const path = require("path");
const eslintrc = require("./.eslintrc.js");
const babel = require("rollup-plugin-babel");
const eslint = require("rollup-plugin-eslint");
const cjs = require("rollup-plugin-commonjs");
const uglify = require("rollup-plugin-uglify");

// 打包后生成 js 的顶部注释说明
const banner =
	"/*!\n" +
	" * jQuery source code analysis v3.3.1\n" +
	" * (c) 2018-" + new Date().getFullYear() + " H_VK\n" +
	" * This is the source code of jquery source code analysis series.\n" +
	" */";

// 设置打包工具中所使用的插件
const plugins = [
	cjs(),
	babel({
		exclude: "node_modules/**" // 忽略 node_modules 的代码
	}),
	eslint(eslintrc)
];

// 设置 Rollup 基础打包配置
const config = {
	input: path.resolve(__dirname, "./src/jQuery.js"),
	output: {
		file: "",
		banner: banner,
		format: "umd",
		name: "jQuery",
		globals: {
			jQuery: "$"
		}
	},
	plugins: plugins
};

// 获取打包配置的方法
function getConfig(target) {
	config.output.file = path.resolve(__dirname, "./dist/jQuery.js");
	if (target === "min") {
		config.output.file = path.resolve(__dirname, "./dist/jQuery.min.js");
		plugins.push(uglify());
	}
	return config;
};
export default getConfig(process.env.TARGET);