var Greeter = /** @class */ (function () {
    function Greeter(m) {
        this.message = m;
    }
    Greeter.prototype.greet = function () {
        return "message is\n" + this.message;
    };
    return Greeter;
}());
var greetref = new Greeter("hello how are you");
console.log(greetref.greet());
