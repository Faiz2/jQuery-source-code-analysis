"use strict";
import * as util from "./util/var-util";

// 定义 jQuery 版本号
const version = "3.3.1";

// 用于确保我们修剪BOM和NBSP 支持 Android <=4.0
const rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

// 创建 jQuery 类
class jQuery {
	// 构造函数
	constructor(selector, context) { };
};

// 定义 jQuery 静态属性 fn
jQuery.fn = jQuery.prototype = {
	// 当前使用的 jQuery 版本
	jquery: version,
	// 构造器，便于内部使用 this.constructor 这种看起来超类继承的写法
	constructor: jQuery,
	// jQuery 对象的默认长度
	length: 0,
	// jQuery 内置转换 Array 类型方法
	toArray: function () {
		return util.slice.call(this);
	},
	get: function (num) { },
	pushStack: function (elems) { },
	each: function (callback) { },
	map: function (callback) { },
	slice: function () { },
	first: function () {
		this.eq(0);
	},
	last: function () {
		this.eq(-1);
	},
	eq: function (i) {
	},
	end: function () { },
	push: util.push,
	sort: util.arr.sort,
	splice: util.arr.splice
};

// 定义 jQuery 静态方法 extend
jQuery.extend = jQuery.fn.extend = function () {

};

export default jQuery;