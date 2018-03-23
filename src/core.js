"use strict";

// 定义 jQuery 版本号
const version = "3.3.1";

// 用于确保我们修剪BOM和NBSP 支持 Android <=4.0
const rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

// 创建 jQuery 类
class jQuery {
	// 构造函数
	constructor(selector, context) {};
};

// 定义 jQuery 静态属性 fn
jQuery.fn = jQuery.prototype = {
	// 当前使用的 jQuery 版本
	jquery: version,
	// 设置构造函数
	constructor: jQuery,
	// jQuery 对象的默认长度
	length: 0,
	// jQuery 内置转换 Array 类型方法
	toArray: function () {
	}
};

// 定义 jQuery 静态方法 extend
jQuery.extend = jQuery.fn.extend = function () {};

export default jQuery;