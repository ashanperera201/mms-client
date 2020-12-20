import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'underscore';
const underscore = _;

@Pipe({ name: 'groupBy' })
export class GroupByPipe implements PipeTransform {
    transform(valueList: any[], groupLabel: string): any[] {
        if (valueList && valueList.length > 0) {
            const groupedObject = underscore.groupBy(valueList, 'id');
            return [].concat(groupedObject);
        } else {
            return valueList;
        }
    }
}