"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DayType = exports.DayTypes = void 0;
var DayTypes;
(function (DayTypes) {
    DayTypes["SUNDAY"] = "weekday";
    DayTypes["MONDAY"] = "weekday";
    DayTypes["TUESDAY"] = "weekday";
    DayTypes["WEDNESDAY"] = "weekday";
    DayTypes["THURSDAY"] = "weekday";
    DayTypes["FRIDAY"] = "weekend day";
    DayTypes["SATURDAY"] = "weekend day";
})(DayTypes || (exports.DayTypes = DayTypes = {}));
;
function DayType(day) {
    console.log("".concat(day, " is a ").concat(DayTypes[day]));
}
exports.DayType = DayType;
var day = "FriDaY";
DayType(day.toUpperCase());
