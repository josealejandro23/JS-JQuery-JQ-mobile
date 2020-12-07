"use strict";
exports.__esModule = true;
var funcionOpcional = function (x, y) {
    var res;
    res = x + y;
    console.log(res);
};
var funcionOpcional2 = function (x, y) {
    if (y === void 0) { y = 0; }
    var res;
    res = x + y;
    console.log(res);
};
funcionOpcional(2, 6);
funcionOpcional2(5);
exports["default"] = {};
