export class SalaryCalculator{
	public basic : number = 0;
	public hra : number = 0;
	public da : number = 0;
	public tax : number = 0;
	public salary : number = 0;;

	calculate(){
		var gross = this.basic + this.hra + this.da;
		var net = gross * ((100-this.tax)/100);
		this.salary = net;
	}
}