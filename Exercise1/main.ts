import { Vehicle } from "./vehicle";
import { Car } from "./car";
import { Boat } from './boat';
import { Plane } from "./plane";

let toyota: Vehicle = new Car(20, "Toyota");
let bmw: Vehicle = new Car(30, "BMW");
let boeing: Vehicle = new Plane(40, "Boeing");
let airbus: Vehicle = new Plane(50, "Airbus");
let yamaha: Vehicle = new Boat(200, "Yamaha");
let bertram: Vehicle = new Boat(4, "Bertram");

let vehicles: Vehicle[] = [toyota, bmw, boeing, airbus, yamaha, bertram];

for (let i = 0; i < 2; i++) {
    for (let vehicle of vehicles) {
        vehicle.accelerate();
    }
}

for (let i = 0; i < 10; i++) {
    for (let vehicle of vehicles) {
        vehicle.decelerate();
    }
}

let cars = vehicles.filter(vehicle => vehicle instanceof Car);
let planes = vehicles.filter(vehicle => vehicle instanceof Plane);
let boats = vehicles.filter(vehicle => vehicle instanceof Boat);

let filteredVehicles = [...cars, ...planes, ...boats];

filteredVehicles.forEach(vehicle => vehicle.display());
