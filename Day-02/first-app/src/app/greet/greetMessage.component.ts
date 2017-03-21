import { Component, Input } from '@angular/core';

@Component({
	selector : 'greet-message',
	template : `<div>{{msg}}</div>`
})
export class GreetMessageComponent{

	@Input()
	msg : string = '';
}