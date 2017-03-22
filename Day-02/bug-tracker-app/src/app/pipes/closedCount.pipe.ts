import { Pipe, PipeTransform } from '@angular/core';
import { IBug } from '../models/IBug';

@Pipe({
	name: 'closedCount',
	pure : false
})
export class ClosedCountPipe implements PipeTransform {
	transform(value: Array<IBug>): any {
		console.log('closedCount pipe transform');
		let result : number = 0;
		for(let index=0; index < value.length; index++)
			if (value[index].isClosed)
				++result;
		return result;
	}
}