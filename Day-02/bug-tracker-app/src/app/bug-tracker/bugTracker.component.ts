import { Component , OnInit } from '@angular/core';
import { IBug } from '../models/IBug';
import { BugServerService } from '../services/bugServer.service';

@Component({
	selector : 'bug-tracker',
	templateUrl : './bugTracker.component.html',
	styleUrls : ['./bugTracker.style.css']
})
/*export class BugTrackerComponent implements OnInit{
	
	public bugs : Array<IBug> = [];
	
	public orderBy : string = 'createdAt';
	public isDescending : boolean = true;
	
	constructor(private bugStorage : BugStorageService){
		console.log(this.bugStorage);	
	}
	ngOnInit(){
		this.bugs = this.bugStorage.getAll();
	}

	onNewBugEvent(bugName : string){
		let newBug : IBug = this.bugStorage.addNew(bugName);
		this.bugs = this.bugs.concat([newBug]);
	}

	onBugClick(bugToToggle : IBug){
		this.bugs = this.bugs.map(bug => {
			if (bugToToggle === bug){
				return this.bugStorage.toggle(bug);
			} else {
				return bug;
			}
		})
	}

	onBugSort(sortData:any){
		this.orderBy = sortData.orderBy;
		this.isDescending = sortData.isDescending;
	}

	onRemoveClosedClick(){
		this.bugs.forEach(bug => {
			if (bug.isClosed)
				this.bugStorage.remove(bug);
		});

		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}

	
}*/

export class BugTrackerComponent implements OnInit{
	
	public bugs : Array<IBug> = [];
	
	public orderBy : string = 'createdAt';
	public isDescending : boolean = true;
	
	constructor(public bugService : BugServerService){
		
	}
	ngOnInit(){
		this.bugService.loadBugs();
	}

	onNewBugEvent(bugName : string){
		this.bugService.addNew(bugName);
	}

	onBugClick(bugToToggle : IBug){
		this.bugService.toggle(bugToToggle);
	}

	onBugSort(sortData:any){
		this.orderBy = sortData.orderBy;
		this.isDescending = sortData.isDescending;
	}

	onRemoveClosedClick(){
		this.bugService.removeClosed();
	}

	
}


