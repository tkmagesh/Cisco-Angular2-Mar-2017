import { IBug } from '../models/IBug';
import { Injectable } from '@angular/core';

import { BugOperationsService } from './bugOperations.service';

@Injectable()
export class BugStorageService{
	private currentBugId : number = 0;
	private storage = window.localStorage;

	//private bugOperationsService : BugOperationsService = new BugOperationsService();
	constructor(private bugOperationsService : BugOperationsService){

	}

	private saveBug(bug : IBug){
		this.storage.setItem(bug.id.toString(), JSON.stringify(bug));
	}

	getAll() : Array<IBug>{
		let result : Array<IBug> = [];
		for(let index = 0; index < this.storage.length; index++){
			let dataAsString = this.storage.getItem(this.storage.key(index));
			let bug = JSON.parse(dataAsString);
			result.push(bug);
			this.currentBugId = this.currentBugId > bug.id ? this.currentBugId : bug.id;
		}
		return result;
	}
	addNew(bugName : string) : IBug {
		let newBug : IBug = this.bugOperationsService.createNew(++this.currentBugId, bugName);
		this.saveBug(newBug);
		return newBug;
	}

	toggle(bug : IBug) : IBug {
		var toggledBug = this.bugOperationsService.toggle(bug);
		this.saveBug(toggledBug);
		return toggledBug;
	}
	remove(bug : IBug) : void {
		this.storage.removeItem(bug.id.toString());
	}
}