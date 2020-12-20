import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'orderByPipe' })
export class OrderByPipe implements PipeTransform {
    transform(valueList: any[]): any {

    }
}