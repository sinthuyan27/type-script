var myString = "Hello, TypeScript!";
var myNumber = 42;
var myBoolean = true;
var myNumberArray = [1, 2, 3, 4, 5]; // 2. Functions
function addNumbers(a, b) {
    return a + b;
}
console.log(addNumbers(5, 10)); // Output: 15// 3. Interfaces
function greet(person) {
    return "Hello, ".concat(person.name, "! You are ").concat(person.age, " years old.");
}
console.log(greet({ name: "John", age: 30 })); // Output: Hello, John! You are 30 years old.// 4. Union Types
function getLengthOrSquare(value) {
    if (typeof value === "string") {
        return value.length;
    }
    else {
        return value * value;
    }
}
console.log(getLengthOrSquare("Hello")); // Output: 5
console.log(getLengthOrSquare(4)); // Output: 16// 5. Classes
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.getDetails = function () {
        return "".concat(this.year, " ").concat(this.make, " ").concat(this.model);
    };
    return Car;
}());
var myCar = new Car("Toyota", "Corolla", 2022);
console.log(myCar.getDetails()); // Output: 2022 Toyota Corolla// 6. Generics
function identity(value) {
    return value;
}
console.log(identity(42)); // Output: 42
console.log(identity("Hello")); // Output: Hello// 7. Enums
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
function getDirectionMessage(direction) {
    switch (direction) {
        case Direction.Up:
            return "You are moving up!";
        case Direction.Down:
            return "You are moving down!";
        case Direction.Left:
            return "You are moving left!";
        case Direction.Right:
            return "You are moving right!";
        default:
            return "Unknown direction!";
    }
}
console.log(getDirectionMessage(Direction.Up)); // Output: You are moving up!// 8. Type Assertions
function assertString(value) {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    throw new Error("Value is not a string!");
}
console.log(assertString("hello")); // Output: HELLO
