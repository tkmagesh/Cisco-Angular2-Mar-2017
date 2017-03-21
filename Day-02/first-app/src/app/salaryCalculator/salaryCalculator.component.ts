import { Component } from '@angular/core';
import { SalaryCalculator } from '../models/SalaryCalculator';


@Component({
	templateUrl : './salaryCalculator.component.html',
	selector : "salary-calculator",
	styleUrls : ['./salaryCalculator.style.css']
})
export class SalaryCalculatorComponent{
	public calculator : SalaryCalculator = new SalaryCalculator();

	onResetClick(){
		this.calculator.basic = 0;
		this.calculator.hra = 0;
		this.calculator.da = 0;
		this.calculator.tax = 0;
		this.calculator.salary = 0;
	}
}