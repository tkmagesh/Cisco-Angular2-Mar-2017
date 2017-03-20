function add(x : any, y : number) : number{
	return x + y;
}

console.log(add("100",200));

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

class Employee{
	

	constructor(public id : number, public name : string, public salary : number){
		
	}

	display(){
		console.log(`id = ${this.id}, name = ${this.name}, salary = ${this.salary}`);
	}

}

class FullTimeEmployee extends Employee{
	constructor(public id : number, public name : string, public salary : number, public benefits : any){
		super(id, name, salary);	
	}
}

var emp : FullTimeEmployee = new FullTimeEmployee(100, 'Magesh', 10000, "Great Food");
emp.display();
console.log(emp.benefits);

//var numbers : Array<number> = [];

for(let i=0; i < 10; i++){

}
const pi = 3.14;

var e1 = { id : 100, ename : 'Magesh', salary : 100000};

var {id, ename} = e1;

var numbers = [10,20,30,40]
var [first, second, ...remaining] = numbers

/*function multiply(x,y){
	return x * y;
}*/

/*var multiply = function(x,y){
	return x * y;
}*/

/*var multiply = (x,y) => {
	return x * y;
};*/

var multiply = (x,y) => x * y;












