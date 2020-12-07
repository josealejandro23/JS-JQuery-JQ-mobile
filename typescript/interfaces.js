"use strict";
exports.__esModule = true;
function printLabel(obj) {
    if (obj.name) {
        console.log(obj.name);
    }
    console.log(obj.label);
}
var testObj = { secret: 23, size: 20, label: 'prueba', name: 'existo' };
printLabel(testObj);
exports["default"] = {};
