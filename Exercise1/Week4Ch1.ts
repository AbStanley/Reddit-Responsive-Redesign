class Vehicle {
    constructor(private speed?: number, private name?: string) {
    }

    public getSpeed(): number {
        return this.speed;
    }
}

let car = new Vehicle(100, "car");
console.log(car.getSpeed());
    