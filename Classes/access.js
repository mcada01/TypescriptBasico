var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.display = function () {
        console.log(this._name);
    };
    Object.defineProperty(Student.prototype, "getName", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "setName", {
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    return Student;
}());
var student = new Student();
student.setName = "Bob";
console.log(student.getName);
