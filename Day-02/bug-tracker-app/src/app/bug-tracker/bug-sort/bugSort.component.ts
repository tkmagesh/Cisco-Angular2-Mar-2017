import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'bug-sort',
	templateUrl: 'bugSort.component.html'
})
export class BugSortComponent implements OnInit {
	@Output()
	public onSort : EventEmitter<any> = new EventEmitter<any>();

	constructor() {}

	ngOnInit() {
		
	}

	triggerSort(orderBy, isDescending){
		this.onSort.emit({ orderBy : orderBy, isDescending : isDescending});
	}
}