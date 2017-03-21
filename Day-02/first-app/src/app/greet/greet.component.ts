import { Component } from '@angular/core';
@Component({
	selector : 'greet',
	template : `
		<div>
			<h1>Greeting App</h1>
			<label for="">Name :</label>
			<input type="text" [(ngModel)]="username" />
			<input type="button" value="Greet" (click)="onGreetClick()"/>
			<div>{{message}}</div>
		</div>`
})
export class GreetComponent{
	public message : string = '';

	public username : string = '';

	onGreetClick(){
		//console.log('greet button clicked');
		this.message = `Welcome ${this.username}!!!`;
		this.username = '';
	}
}