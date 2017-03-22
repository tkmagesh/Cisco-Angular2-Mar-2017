import { Component, OnInit, Input } from '@angular/core';
import { IBug } from '../../models/IBug';

@Component({
	moduleId: module.id,
	selector: 'bug-stats',
	templateUrl: 'bugStats.component.html',
	styleUrls : ['./bugStats.style.css']
})
export class BugStatsComponent implements OnInit {

	@Input()
	data : Array<IBug> = [];

	constructor() {}

	ngOnInit() {
		
	}
}