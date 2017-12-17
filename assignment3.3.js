/**
 * The Animal class is base class which showing animal properties and behavior
 * @class Animal
 * @constructor
 **/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(animalName) {
        this._animalName = animalName;
    }
    Animal.prototype.move = function (distance) {
        return "animal specific \ndistance";
    };
    Animal.prototype.makeSound = function (sound) {
        return "sound";
    };
    return Animal;
}());
/**
 * The Dog class is drived from Animal, and will extend its properties
 * @class Dog
 * @extends Animal
 * @constructor
**/
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(animalName) {
        return _super.call(this, animalName) || this;
    }
    Dog.prototype.move = function (distance) {
        return this._animalName + " moves a distance of " + distance;
    };
    Dog.prototype.makeSound = function (sound) {
        return this._animalName + " " + sound;
    };
    return Dog;
}(Animal));
/**
 * The Cat class is drived from Animal, and will extend its properties
 * @class Cat
 * @extends Animal
 * @constructor
**/
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(animalName) {
        return _super.call(this, animalName) || this;
    }
    Cat.prototype.move = function (distance) {
        return this._animalName + " moves a distance of " + distance;
    };
    Cat.prototype.makeSound = function (sound) {
        return this._animalName + " " + sound;
    };
    return Cat;
}(Animal));
var cat = new Cat("cat");
var dog = new Dog("dog");
console.log(cat.makeSound("meows"));
console.log(cat.move(500));
console.log(dog.makeSound("barks"));
console.log(dog.move(500));
