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
function add(x, y) {
    return x + y;
}
console.log(add("100", 200));
/*
class Employee{
    public id : number;
    public name : string;
    public salary : number;

    constructor(id : number, name : string, salary : number){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    display(){
        console.log(`id = ${this.id}, name = ${this.name}, salary = ${this.salary}`);
    }
}
*/
var Employee = (function () {
    function Employee(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    Employee.prototype.display = function () {
        console.log("id = " + this.id + ", name = " + this.name + ", salary = " + this.salary);
    };
    return Employee;
}());
var FullTimeEmployee = (function (_super) {
    __extends(FullTimeEmployee, _super);
    function FullTimeEmployee(id, name, salary, benefits) {
        var _this = _super.call(this, id, name, salary) || this;
        _this.id = id;
        _this.name = name;
        _this.salary = salary;
        _this.benefits = benefits;
        return _this;
    }
    return FullTimeEmployee;
}(Employee));
var emp = new FullTimeEmployee(100, 'Magesh', 10000, "Great Food");
emp.display();
console.log(emp.benefits);
//var numbers : Array<number> = [];
for (var i = 0; i < 10; i++) {
}
var pi = 3.14;
var e1 = { id: 100, name: 'Magesh', salary: 100000 };
/*var id = e1.id,
    name = e1.name*/
var id = e1.id, name = e1.name;
var numbers = [10, 20, 30, 40];
var first = numbers[0], second = numbers[1], remaining = numbers.slice(2);
