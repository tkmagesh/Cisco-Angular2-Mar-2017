import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'sort',
	pure : true
})
export class SortPipe implements PipeTransform {
	transform(list: Array<any>, field: string, isDescending : boolean = false): Array<any> {
		if (!list || !list.length) return list;
		if (!field) return list;
		let comparer : IComparer = getComparer(field);
		if (isDescending){
			comparer = getDescending(comparer);
		}
		list.sort(comparer);
		return list;
	}
}

interface IComparer{
	(item1:any, item2 : any) : number
}

function getComparer(field:string) : IComparer{
	return function(item1 : any, item2 : any) : number {
		if (item1[field] < item2[field]) return -1;
		if (item1[field] > item2[field]) return 1;
		return 0
	}
}

function getDescending(comparer : IComparer) : IComparer{
	return function(item1 : any, item2 : any) : number {
		return comparer(item1, item2) * -1;
	}
}