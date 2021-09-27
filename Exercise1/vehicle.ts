export abstract class Vehicle {

    constructor(private _speed?: number, private name?: string) {    
    }

    display(): void{
        console.log('Vehicle with name ' + this.name + ' has a speed of ' + this._speed + ' km/h');
    }    

    accelerate(): void {
        (this._speed > 200) ? console.log('Vehicle speed with name ' + this.name +  'cannot have a speed greater than 200') : this._speed += 1;
                
    }

    decelerate(): void {
        (this._speed < 0) ? console.log('Vehicle speed with name ' + this.name + 'cannot be lower than 0') : this._speed -= 1;
    }
};


