"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["vendor/fast-array-diff"],{

/***/ "./node_modules/fast-array-diff/esm/diff/apply.js":
/*!********************************************************!*\
  !*** ./node_modules/fast-array-diff/esm/diff/apply.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyPatch": () => (/* binding */ applyPatch)
/* harmony export */ });
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function applyPatch(a, patch) {
    var _a;
    var segments = [];
    var sameStart = 0;
    for (var i = 0; i < patch.length; ++i) {
        var patchItem = patch[i];
        sameStart !== patchItem.oldPos && segments.push(a.slice(sameStart, patchItem.oldPos));
        if (patchItem.type === 'add') {
            segments.push(patchItem.items);
            sameStart = patchItem.oldPos;
        }
        else if (patchItem.items) {
            sameStart = patchItem.oldPos + patchItem.items.length;
        }
        else {
            sameStart = patchItem.oldPos + patchItem.length;
        }
    }
    sameStart !== a.length && segments.push(a.slice(sameStart));
    return (_a = []).concat.apply(_a, __spreadArray([], __read(segments), false));
}


/***/ }),

/***/ "./node_modules/fast-array-diff/esm/diff/diff.js":
/*!*******************************************************!*\
  !*** ./node_modules/fast-array-diff/esm/diff/diff.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "diff": () => (/* binding */ diff)
/* harmony export */ });
/* harmony import */ var _lcs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lcs */ "./node_modules/fast-array-diff/esm/diff/lcs.js");

function diff(a, b, compareFunc) {
    if (compareFunc === void 0) { compareFunc = function (ia, ib) { return ia === ib; }; }
    var ret = {
        removed: [],
        added: [],
    };
    (0,_lcs__WEBPACK_IMPORTED_MODULE_0__["default"])(a, b, compareFunc, function (type, oldArr, oldStart, oldEnd, newArr, newStart, newEnd) {
        if (type === 'add') {
            for (var i = newStart; i < newEnd; ++i) {
                ret.added.push(newArr[i]);
            }
        }
        else if (type === 'remove') {
            for (var i = oldStart; i < oldEnd; ++i) {
                ret.removed.push(oldArr[i]);
            }
        }
    });
    return ret;
}


/***/ }),

/***/ "./node_modules/fast-array-diff/esm/diff/lcs.js":
/*!******************************************************!*\
  !*** ./node_modules/fast-array-diff/esm/diff/lcs.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ bestSubSequence)
/* harmony export */ });
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
function lcs(a, b, compareFunc) {
    var M = a.length, N = b.length;
    var MAX = M + N;
    var v = { 1: 0 };
    for (var d = 0; d <= MAX; ++d) {
        for (var k = -d; k <= d; k += 2) {
            var x = void 0;
            if (k === -d || (k !== d && v[k - 1] + 1 < v[k + 1])) {
                x = v[k + 1];
            }
            else {
                x = v[k - 1] + 1;
            }
            var y = x - k;
            while (x < M && y < N && compareFunc(a[x], b[y])) {
                x++;
                y++;
            }
            if (x === M && y === N) {
                return d;
            }
            v[k] = x;
        }
    }
    /* istanbul ignore next */
    return -1; // never reach
}
var Direct;
(function (Direct) {
    Direct[Direct["none"] = 0] = "none";
    Direct[Direct["horizontal"] = 1] = "horizontal";
    Direct[Direct["vertical"] = 2] = "vertical";
    Direct[Direct["diagonal"] = 4] = "diagonal";
    Direct[Direct["all"] = 7] = "all";
})(Direct || (Direct = {}));
function getSolution(a, aStart, aEnd, b, bStart, bEnd, d, startDirect, endDirect, compareFunc, elementsChanged) {
    var _a, _b, _c, _d;
    if (d === 0) {
        elementsChanged('same', a, aStart, aEnd, b, bStart, bEnd);
        return;
    }
    else if (d === aEnd - aStart + (bEnd - bStart)) {
        var removeFirst = (startDirect & Direct.horizontal ? 1 : 0) + (endDirect & Direct.vertical ? 1 : 0);
        var addFirst = (startDirect & Direct.vertical ? 1 : 0) + (endDirect & Direct.horizontal ? 1 : 0);
        if (removeFirst >= addFirst) {
            aStart !== aEnd && elementsChanged('remove', a, aStart, aEnd, b, bStart, bStart);
            bStart !== bEnd && elementsChanged('add', a, aEnd, aEnd, b, bStart, bEnd);
        }
        else {
            bStart !== bEnd && elementsChanged('add', a, aStart, aStart, b, bStart, bEnd);
            aStart !== aEnd && elementsChanged('remove', a, aStart, aEnd, b, bEnd, bEnd);
        }
        return;
    }
    var M = aEnd - aStart;
    var N = bEnd - bStart;
    var HALF = Math.floor(N / 2);
    var now = {};
    for (var k = -d - 1; k <= d + 1; ++k) {
        now[k] = { d: Infinity, segments: 0, direct: Direct.none };
    }
    var preview = (_a = {},
        _a[-d - 1] = { d: Infinity, segments: 0, direct: Direct.none },
        _a[d + 1] = { d: Infinity, segments: 0, direct: Direct.none },
        _a);
    for (var y = 0; y <= HALF; ++y) {
        _b = __read([preview, now], 2), now = _b[0], preview = _b[1];
        var _loop_1 = function (k) {
            var x = y + k;
            if (y === 0 && x === 0) {
                now[k] = {
                    d: 0,
                    segments: 0,
                    direct: startDirect,
                };
                return "continue";
            }
            var currentPoints = [
                {
                    direct: Direct.horizontal,
                    d: now[k - 1].d + 1,
                    segments: now[k - 1].segments + (now[k - 1].direct & Direct.horizontal ? 0 : 1),
                },
                {
                    direct: Direct.vertical,
                    d: preview[k + 1].d + 1,
                    segments: preview[k + 1].segments + (preview[k + 1].direct & Direct.vertical ? 0 : 1),
                },
            ];
            if (x > 0 && x <= M && y > 0 && y <= N && compareFunc(a[aStart + x - 1], b[bStart + y - 1])) {
                currentPoints.push({
                    direct: Direct.diagonal,
                    d: preview[k].d,
                    segments: preview[k].segments + (preview[k].direct & Direct.diagonal ? 0 : 1),
                });
            }
            var bestValue = currentPoints.reduce(function (best, info) {
                if (best.d > info.d) {
                    return info;
                }
                else if (best.d === info.d && best.segments > info.segments) {
                    return info;
                }
                return best;
            });
            currentPoints.forEach(function (info) {
                if (bestValue.d === info.d && bestValue.segments === info.segments) {
                    bestValue.direct |= info.direct;
                }
            });
            now[k] = bestValue;
        };
        for (var k = -d; k <= d; ++k) {
            _loop_1(k);
        }
    }
    var now2 = {};
    for (var k = -d - 1; k <= d + 1; ++k) {
        now2[k] = { d: Infinity, segments: 0, direct: Direct.none };
    }
    var preview2 = (_c = {},
        _c[-d - 1] = { d: Infinity, segments: 0, direct: Direct.none },
        _c[d + 1] = { d: Infinity, segments: 0, direct: Direct.none },
        _c);
    for (var y = N; y >= HALF; --y) {
        _d = __read([preview2, now2], 2), now2 = _d[0], preview2 = _d[1];
        var _loop_2 = function (k) {
            var x = y + k;
            if (y === N && x === M) {
                now2[k] = {
                    d: 0,
                    segments: 0,
                    direct: endDirect,
                };
                return "continue";
            }
            var currentPoints = [
                {
                    direct: Direct.horizontal,
                    d: now2[k + 1].d + 1,
                    segments: now2[k + 1].segments + (now2[k + 1].direct & Direct.horizontal ? 0 : 1),
                },
                {
                    direct: Direct.vertical,
                    d: preview2[k - 1].d + 1,
                    segments: preview2[k - 1].segments + (preview2[k - 1].direct & Direct.vertical ? 0 : 1),
                },
            ];
            if (x >= 0 && x < M && y >= 0 && y < N && compareFunc(a[aStart + x], b[bStart + y])) {
                currentPoints.push({
                    direct: Direct.diagonal,
                    d: preview2[k].d,
                    segments: preview2[k].segments + (preview2[k].direct & Direct.diagonal ? 0 : 1),
                });
            }
            var bestValue = currentPoints.reduce(function (best, info) {
                if (best.d > info.d) {
                    return info;
                }
                else if (best.d === info.d && best.segments > info.segments) {
                    return info;
                }
                return best;
            });
            currentPoints.forEach(function (info) {
                if (bestValue.d === info.d && bestValue.segments === info.segments) {
                    bestValue.direct |= info.direct;
                }
            });
            now2[k] = bestValue;
        };
        for (var k = d; k >= -d; --k) {
            _loop_2(k);
        }
    }
    var best = {
        k: -1,
        d: Infinity,
        segments: 0,
        direct: Direct.none,
    };
    for (var k = -d; k <= d; ++k) {
        var dSum = now[k].d + now2[k].d;
        if (dSum < best.d) {
            best.k = k;
            best.d = dSum;
            best.segments =
                now[k].segments + now2[k].segments + (now[k].segments & now2[k].segments ? 0 : 1);
            best.direct = now2[k].direct;
        }
        else if (dSum === best.d) {
            var segments = now[k].segments + now2[k].segments + (now[k].segments & now2[k].segments ? 0 : 1);
            if (segments < best.segments) {
                best.k = k;
                best.d = dSum;
                best.segments = segments;
                best.direct = now2[k].direct;
            }
            else if (segments === best.segments &&
                !(best.direct & Direct.diagonal) &&
                now2[k].direct & Direct.diagonal) {
                best.k = k;
                best.d = dSum;
                best.segments = segments;
                best.direct = now2[k].direct;
            }
        }
    }
    if (HALF + best.k === 0 && HALF === 0) {
        HALF++;
        now[best.k].direct = now2[best.k].direct;
        now2[best.k].direct = preview2[best.k].direct;
    }
    getSolution(a, aStart, aStart + HALF + best.k, b, bStart, bStart + HALF, now[best.k].d, startDirect, now2[best.k].direct, compareFunc, elementsChanged);
    getSolution(a, aStart + HALF + best.k, aEnd, b, bStart + HALF, bEnd, now2[best.k].d, now[best.k].direct, endDirect, compareFunc, elementsChanged);
}
function bestSubSequence(a, b, compareFunc, elementsChanged) {
    var d = lcs(a, b, compareFunc);
    getSolution(a, 0, a.length, b, 0, b.length, d, Direct.diagonal, Direct.all, compareFunc, elementsChanged);
}


/***/ }),

/***/ "./node_modules/fast-array-diff/esm/diff/patch.js":
/*!********************************************************!*\
  !*** ./node_modules/fast-array-diff/esm/diff/patch.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPatch": () => (/* binding */ getPatch)
/* harmony export */ });
/* harmony import */ var _lcs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lcs */ "./node_modules/fast-array-diff/esm/diff/lcs.js");

function getPatch(a, b, compareFunc) {
    if (compareFunc === void 0) { compareFunc = function (ia, ib) { return ia === ib; }; }
    var patch = [];
    var lastAdd = null;
    var lastRemove = null;
    function pushChange(type, oldArr, oldStart, oldEnd, newArr, newStart, newEnd) {
        if (type === 'same') {
            if (lastRemove) {
                patch.push(lastRemove);
            }
            if (lastAdd) {
                patch.push(lastAdd);
            }
            lastRemove = null;
            lastAdd = null;
        }
        else if (type === 'remove') {
            if (!lastRemove) {
                lastRemove = {
                    type: 'remove',
                    oldPos: oldStart,
                    newPos: newStart,
                    items: [],
                };
            }
            for (var i = oldStart; i < oldEnd; ++i) {
                lastRemove.items.push(oldArr[i]);
            }
            if (lastAdd) {
                lastAdd.oldPos += oldEnd - oldStart;
                if (lastRemove.oldPos === oldStart) {
                    lastRemove.newPos -= oldEnd - oldStart;
                }
            }
        }
        else if (type === 'add') {
            if (!lastAdd) {
                lastAdd = {
                    type: 'add',
                    oldPos: oldStart,
                    newPos: newStart,
                    items: [],
                };
            }
            for (var i = newStart; i < newEnd; ++i) {
                lastAdd.items.push(newArr[i]);
            }
        }
    }
    (0,_lcs__WEBPACK_IMPORTED_MODULE_0__["default"])(a, b, compareFunc, pushChange);
    pushChange('same', [], 0, 0, [], 0, 0);
    return patch;
}


/***/ }),

/***/ "./node_modules/fast-array-diff/esm/diff/same.js":
/*!*******************************************************!*\
  !*** ./node_modules/fast-array-diff/esm/diff/same.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lcs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lcs */ "./node_modules/fast-array-diff/esm/diff/lcs.js");

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b, compareFunc) {
    if (compareFunc === void 0) { compareFunc = function (ia, ib) { return ia === ib; }; }
    var ret = [];
    (0,_lcs__WEBPACK_IMPORTED_MODULE_0__["default"])(a, b, compareFunc, function (type, oldArr, oldStart, oldEnd) {
        if (type === 'same') {
            for (var i = oldStart; i < oldEnd; ++i) {
                ret.push(oldArr[i]);
            }
        }
    });
    return ret;
}


/***/ }),

/***/ "./node_modules/fast-array-diff/esm/index.js":
/*!***************************************************!*\
  !*** ./node_modules/fast-array-diff/esm/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyPatch": () => (/* reexport safe */ _diff_apply__WEBPACK_IMPORTED_MODULE_4__.applyPatch),
/* harmony export */   "bestSubSequence": () => (/* reexport safe */ _diff_lcs__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "diff": () => (/* reexport safe */ _diff_diff__WEBPACK_IMPORTED_MODULE_2__.diff),
/* harmony export */   "getPatch": () => (/* reexport safe */ _diff_patch__WEBPACK_IMPORTED_MODULE_3__.getPatch),
/* harmony export */   "same": () => (/* reexport safe */ _diff_same__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _diff_lcs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./diff/lcs */ "./node_modules/fast-array-diff/esm/diff/lcs.js");
/* harmony import */ var _diff_same__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./diff/same */ "./node_modules/fast-array-diff/esm/diff/same.js");
/* harmony import */ var _diff_diff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./diff/diff */ "./node_modules/fast-array-diff/esm/diff/diff.js");
/* harmony import */ var _diff_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./diff/patch */ "./node_modules/fast-array-diff/esm/diff/patch.js");
/* harmony import */ var _diff_apply__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./diff/apply */ "./node_modules/fast-array-diff/esm/diff/apply.js");








/***/ })

}]);