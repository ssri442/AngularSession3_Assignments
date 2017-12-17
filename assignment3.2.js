/**
 * Class  Car implements Interface Drivable
 * @class Car
 *
 **/
var Car = /** @class */ (function () {
    function Car() {
    }
    //defined start method
    Car.prototype.start = function (value) {
        return "Car started : " + value + " ;";
    };
    // defined drive method
    Car.prototype.drive = function (value1) {
        return "Drive mode : " + value1 + " ;  ";
    };
    // defined getPosition method
    Car.prototype.getPosition = function (value2) {
        return "Position adjusted : " + value2;
    };
    return Car;
}());
var car = new Car();
var start1 = car.start(true);
var drive1 = car.drive(true);
var position = car.getPosition("left");
console.log(start1 + " " + drive1 + " " + position);
