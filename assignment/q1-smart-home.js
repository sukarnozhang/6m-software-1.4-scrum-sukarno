/*
    Task
    - Create a "BaseSignal" class to be inherited by "TvSignal", "AirconSignal" and "DoorSignal" class.
    - In the "BaseSignal" class, throw an error within the constructor to block direct instantiation (see doc-permissions.js for example).
    - Implement `send` method to print `Sending ${type} signal` in the BaseSignal class.
    - In the respective child classes, call `super()` with it's type.
*/

// Task: Add code here

class BaseSignal {
    constructor(name){
        if (this.constructor===BaseSignal){
            throw new Error("cannot instantiate BaseSignal directly");
        }
        this.name = name;
    }
    send() {
        console.log(`sending ${this.name} signal`);
    }

}

class TvSignal extends BaseSignal {
    constructor(name){
        // Add code here
        super(name);
    }
}

class AirconSignal extends BaseSignal {
    constructor(){
        super("aircon");
    }
}

class DoorSignal extends BaseSignal {
    constructor(){
        super("door");
    }
}


const tv = new TvSignal("tv");
tv.send(); // prints "Sending tv signal"

const aircon = new AirconSignal();
aircon.send();

const door = new DoorSignal();
door.send();