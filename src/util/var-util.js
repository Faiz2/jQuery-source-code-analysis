"use strict";

export const arr = [];

export const document = window.document;

export const getProto = Object.getPrototypeOf;

export const slice = arr.slice;

export const concat = arr.concat;

export const push = arr.push;

export const indexOf = arr.indexOf;

export const class2type = {};

export const toString = class2type.toString;

export const hasOwn = class2type.hasOwnProperty;

export const fnToString = hasOwn.toString;

export const ObjectFunctionString = fnToString.call(Object);

export const support = {};

export const isFunction = function isFunction(obj) {
	return typeof obj === "function" && typeof obj.nodeType !== "number";
};

export const isWindow = function isWindow(obj) {
	return obj != null && obj === obj.window;
};