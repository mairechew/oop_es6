// used to be constructor functions in ES5
class Drone {
// avoid heavy processing
  constructor(id, name){
  // using 'this' references the specific instanceof object
  // instance properties
  // underscore convention means private property
    this._id = id;
    this.name = name;
  }
  // static methods only exists on the class Drone
  static getCompany() {
    console.log(this.id);
  }

  fly() {
    console.log('Drone ' + this.id + ' is flying');
  }
  // getter function
  // used for validation or loggings
  get id() {
    console.log('in id getter');
    return this._id + ' TEMPORARY';
  }

  // setter functions
  // used to set a value or change data
  set id(value) {
    this._id = value;
  }
}

let drone = new Drone('A123');
drone.id = 'B456'
console.log('drone id: ' + drone.id);
