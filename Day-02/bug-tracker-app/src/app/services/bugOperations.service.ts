import { IBug } from '../models/IBug';

export class BugOperationsService{
	createNew(id : number, bugName : string) : IBug {
		return {
			id : id,
			name : bugName,
			isClosed : false,
			createdAt : new Date()
		};
	}

	toggle(bug : IBug){
		return {
			id : bug.id,
			name : bug.name,
			isClosed : !bug.isClosed,
			createdAt : bug.createdAt
		};
	}
}