"use strict";
exports.__esModule = true;
function printLabel(obj) {
    if (obj.name) {
        console.log(obj.name);
    }
    console.log(obj.label);
}
var testObj = { size: 20, label: 'prueba', name: 'alejo' };
printLabel(testObj);
exports["default"] = {};
