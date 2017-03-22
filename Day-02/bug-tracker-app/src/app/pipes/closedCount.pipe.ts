import { Pipe, PipeTransform } from '@angular/core';
import { IBug } from '../models/IBug';

@Pipe({
	name: 'closedCount',
	pure : true
})
export class ClosedCountPipe implements PipeTransform {
	transform(value: Array<IBug>): number {
		return value.reduce((result, bug) => {
			return bug.isClosed ? ++result : result;
		}, 0);
	}
}