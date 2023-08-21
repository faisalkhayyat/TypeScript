"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrafficMsg = exports.TrafficColor = void 0;
var TrafficColor;
(function (TrafficColor) {
    TrafficColor["RED"] = "stop";
    TrafficColor["YELLOW"] = "steady/slow down";
    TrafficColor["GREEN"] = "go";
})(TrafficColor || (exports.TrafficColor = TrafficColor = {}));
function TrafficMsg(state) {
    console.log("Traffic Color: ".concat(state.toUpperCase(), ", Action: ").concat(TrafficColor[state.toUpperCase()]));
}
exports.TrafficMsg = TrafficMsg;
var trafficColor = "gREeN";
TrafficMsg(trafficColor);
