"use strict";
const path = require("path");
const babel = require("rollup-plugin-babel");

const banner =
	"/*!\n" +
	" * jQuery source code analysis v3.3.1\n" +
	" * (c) 2018-" + new Date().getFullYear() + " H_VK\n" +
	" * This is the source code of jquery source code analysis series.\n" +
	" */";

export default {
	input: path.resolve(__dirname, "./src/jQuery.js"),
	output: {
		file: path.resolve(__dirname, "./dist/jQuery.js"),
		banner: banner,
		format: "umd",
		name: "jQuery",
		globals: {
			jQuery: "$"
		}
	},
	plugins: [
		babel({
			exclude: "node_modules/**" // 忽略 node_modules 的代码
		})
	]
};