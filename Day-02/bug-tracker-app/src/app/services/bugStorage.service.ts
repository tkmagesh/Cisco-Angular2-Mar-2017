import { IBug } from '../models/IBug';

export class BugStorageService{
	private currentBugId : number = 0;
	private storage = window.localStorage;

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
		let newBug : IBug = {
			id : ++this.currentBugId,
			name : bugName,
			isClosed : false
		};
		this.saveBug(newBug);
		return newBug;
	}

	toggle(bug : IBug) : IBug {
		var toggledBug = {
			id : bug.id,
			name : bug.name,
			isClosed : !bug.isClosed
		};
		this.saveBug(toggledBug);
		return toggledBug
	}
	remove(bug : IBug) : void {
		this.storage.removeItem(bug.id.toString());
	}
}