import { Car, Plane, Boat, Vehicle } from "./classes";

let toyota: Vehicle = new Car(20, "Toyota");
let bmw: Vehicle = new Car(30, "BMW");
let boeing: Vehicle = new Plane(40, "Boeing");
let airbus: Vehicle = new Plane(50, "Airbus");
let yamaha: Vehicle = new Boat(200, "Yamaha");
let bertram: Vehicle = new Boat(4, "Bertram");

let vehicles: Vehicle[] = [toyota, bmw, boeing, airbus, yamaha, bertram];

let cars = vehicles.filter(vehicle => vehicle instanceof Car);
cars.forEach(vehicle => vehicle.display());

let planes = vehicles.filter(vehicle => vehicle instanceof Plane);
planes.forEach(vehicle => vehicle.display());

let boats = vehicles.filter(vehicle => vehicle instanceof Boat);
boats.forEach(vehicle => vehicle.display());