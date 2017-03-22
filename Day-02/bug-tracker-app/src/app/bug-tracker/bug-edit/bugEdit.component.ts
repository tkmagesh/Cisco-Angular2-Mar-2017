import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'bug-edit',
	templateUrl: 'bugEdit.component.html'
})
export class BugEditComponent implements OnInit {

	@Output()
	public onNewBug : EventEmitter<string> = new EventEmitter<string>();

	constructor() {}

	ngOnInit() {
		
	}

	onAddNewClick(bugName : string){
		this.onNewBug.emit(bugName);
	}
}