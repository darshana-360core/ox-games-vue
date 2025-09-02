"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["vendor/array-shuffle"],{

/***/ "./node_modules/array-shuffle/index.js":
/*!*********************************************!*\
  !*** ./node_modules/array-shuffle/index.js ***!
  \*********************************************/
/***/ ((module) => {



module.exports = array => {
	if (!Array.isArray(array)) {
		throw new TypeError(`Expected an array, got ${typeof array}`);
	}

	array = [...array];

	for (let index = array.length - 1; index > 0; index--) {
		const newIndex = Math.floor(Math.random() * (index + 1));
		[array[index], array[newIndex]] = [array[newIndex], array[index]];
	}

	return array;
};


/***/ })

}]);