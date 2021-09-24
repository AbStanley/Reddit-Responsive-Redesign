var Vehicle = /** @class */ (function () {
    function Vehicle(speed, name) {
        this.speed = speed;
        this.name = name;
    }
    Vehicle.prototype.getSpeed = function () {
        return this.speed;
    };
    return Vehicle;
}());
var car = new Vehicle(100, "car");
console.log(car.getSpeed());
