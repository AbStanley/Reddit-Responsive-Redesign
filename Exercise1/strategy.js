"use strict";
exports.__esModule = true;
exports.Vehicle = exports.Plane = exports.Boat = exports.Car = void 0;
var Car = /** @class */ (function () {
    function Car(_speed, _name) {
        this._speed = _speed;
        this._name = _name;
    }
    Car.prototype.execute = function () {
        console.log('Vehicle with name ' + this._name + ' has a speed of ' + this._speed + ' km/h');
    };
    Car.prototype.accelerate = function () {
        this._speed += 1;
    };
    Car.prototype.decelerate = function () {
        this._speed -= 1;
    };
    return Car;
}());
exports.Car = Car;
;
var Boat = /** @class */ (function () {
    function Boat(_speed, _name) {
        this._speed = _speed;
        this._name = _name;
    }
    Boat.prototype.execute = function () {
        console.log('Vehicle with name ' + this._name + ' has a speed of ' + this._speed + ' km/h');
    };
    Boat.prototype.accelerate = function () {
        this._speed += 1;
    };
    Boat.prototype.decelerate = function () {
        this._speed -= 1;
    };
    return Boat;
}());
exports.Boat = Boat;
;
var Plane = /** @class */ (function () {
    function Plane(_speed, _name) {
        this._speed = _speed;
        this._name = _name;
    }
    Plane.prototype.execute = function () {
        console.log('Vehicle with name ' + this._name + ' has a speed of ' + this._speed + ' km/h');
    };
    Plane.prototype.accelerate = function () {
        this._speed += 1;
    };
    Plane.prototype.decelerate = function () {
        this._speed -= 1;
    };
    return Plane;
}());
exports.Plane = Plane;
;
var Vehicle = /** @class */ (function () {
    function Vehicle(strategy) {
        this.strategy = strategy;
    }
    Vehicle.prototype.executeMovement = function () {
        this.strategy.decelerate();
        this.strategy.execute();
    };
    return Vehicle;
}());
exports.Vehicle = Vehicle;
