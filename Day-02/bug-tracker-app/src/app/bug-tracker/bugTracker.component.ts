import { Component , OnInit } from '@angular/core';
import { IBug } from '../models/IBug';
import { BugStorageService } from '../services/bugStorage.service';

@Component({
	selector : 'bug-tracker',
	templateUrl : './bugTracker.component.html',
	styleUrls : ['./bugTracker.style.css']
})
export class BugTrackerComponent implements OnInit{
	
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

	onRemoveClosedClick(){
		this.bugs.forEach(bug => {
			if (bug.isClosed)
				this.bugStorage.remove(bug);
		});

		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}

	
}


