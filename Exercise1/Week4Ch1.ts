import { Car, Plane, Boat, Vehicle } from "./strategy";

export function show(): void {
  let toyota: Vehicle = new Vehicle(new Car(20, "Toyota"));
  let audi: Vehicle = new Vehicle(new Car(30, "Audi"));
  let boeing: Vehicle = new Vehicle(new Plane(40, "Boeing"));
  let airbus: Vehicle = new Vehicle(new Plane(50, "Airbus"));
  let bertram: Vehicle = new Vehicle(new Boat(60, "Bertram"));
  let yamaha: Vehicle = new Vehicle(new Boat(70, "Yamaha"));

  let vehicles: Vehicle[] = [toyota, audi, boeing, airbus, bertram, yamaha];
  vehicles.forEach((vehicle) => vehicle.executeMovement());

  // filter by type
  // WHAT TO DO WITH FILTERS? HOW TO DISPLAY? WHAT TO DO WITH VALIDATION?
  // CAN I USE STRATEGY PATTERN?

}
show();
