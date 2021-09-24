"use strict";
exports.__esModule = true;
exports.show = void 0;
var strategy_1 = require("./strategy");
function show() {
    var toyota = new strategy_1.Vehicle(new strategy_1.Car(20, "Toyota"));
    var audi = new strategy_1.Vehicle(new strategy_1.Car(30, "Audi"));
    var boeing = new strategy_1.Vehicle(new strategy_1.Plane(40, "Boeing"));
    var airbus = new strategy_1.Vehicle(new strategy_1.Plane(50, "Airbus"));
    var vehicles = [toyota, audi, boeing, airbus];
    vehicles.forEach(function (vehicle) { return vehicle.executeMovement(); });
}
exports.show = show;
show();
