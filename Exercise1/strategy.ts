export interface Strategy {
    execute(): void;
    decelerate(): void;
}

export class Car implements Strategy {
    constructor(private _speed?: number, private _name?: string){
    }
    public execute(): void {
        console.log('Vehicle with name ' + this._name + ' has a speed of ' + this._speed + ' km/h');
    }
    public accelerate(): void {
        this._speed += 1;
    }
    public decelerate(): void {
        this._speed -= 1;
    }
};

export class Boat implements Strategy {
    constructor(private _speed?: number, private _name?: string){
    }
    public execute(): void {
        console.log('Vehicle with name ' + this._name + ' has a speed of ' + this._speed + ' km/h');
    }
    public accelerate(): void {
        this._speed += 1;
    }
    public decelerate(): void {
        this._speed -= 1;
    }
};

export class Plane implements Strategy {
    constructor(private _speed?: number, private _name?: string){
    }
    public execute(): void {
        console.log('Vehicle with name ' + this._name + ' has a speed of ' + this._speed + ' km/h');
    }
    public accelerate(): void {
        this._speed += 1;
    }
    public decelerate(): void {
        this._speed -= 1;
    }    
};

export class Vehicle {
    private strategy: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    public executeMovement(): void {
        this.strategy.decelerate();
        this.strategy.execute();
    }
}