export abstract class Vehicle {

    constructor(private _speed?: number, private name?: string) {    
    }

    display(): void{
        console.log('Vehicle with name ' + this.name + ' has a speed of ' + this._speed + ' km/h');
    }    

    accelerate(): void {
        if (this._speed < 0) {
            console.log('Vehicle speed with name ' + this.name + 'cannot be lower than 0');
        }
        else if (this._speed > 200) {
            console.log('Vehicle speed with name ' + this.name +  'Speed cannot be greater than 200');
        }
        else {
            this._speed += 1;
        }
    }

    decelerate(): void {
        if (this._speed < 0) {
            console.log('Vehicle speed with name ' + this.name + 'cannot be lower than 0');
        }
        else if (this._speed > 200) {
            console.log('Vehicle speed with name ' + this.name +  'Speed cannot be greater than 200');
        }
        else {
            this._speed -= 1;
        }
    }
};

export  class Car extends Vehicle {         
    constructor(speed: number, name: string) { 
        super(speed, name);     
    }    
};

export class Boat extends Vehicle {        
    constructor(speed: number, name: string) { 
        super(speed, name);     
    }    
};

export class Plane extends Vehicle {
    constructor(speed: number, name: string) {
        super(speed, name);
    }
};


