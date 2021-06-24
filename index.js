let EventEmitter = require("events").EventEmitter;
let util = require("util");

let Animal = function () {

  EventEmitter.call(this);
};

util.inherits(Animal, EventEmitter);


Animal.prototype.message = "qwert";

Animal.prototype.say = function () {
  console.log(this.message);
  this.emit("say", this.message);
};


let Dog = function () {
  Animal.call(this);
  this.message = "wanwan"
};

util.inherits(Dog, Animal);

let dog = new Dog();
dog.on("say", function (message) {
  console.log(`${message}と叫んだ`);
});
dog.say();
