import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'bug-list',
	templateUrl: 'bugList.component.html'
})
export class BugListComponent implements OnInit {

	@Output()
	public onBugToggle : EventEmitter<any> = new EventEmitter<any>();

	@Output()
	public onRemoveClosed : EventEmitter<void> = new EventEmitter<void>();

	@Input()
	public data : Array<any> = [];

	constructor() {}

	ngOnInit() {
		
	}

	onBugClick(bug){
		this.onBugToggle.emit(bug);
	}

	onRemoveButtonClick(){
		this.onRemoveClosed.emit();
	}
}