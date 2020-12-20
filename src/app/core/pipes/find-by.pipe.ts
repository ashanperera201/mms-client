import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'findBy' })
export class FindByPipe implements PipeTransform {
    transform(valueList: any[]): any {

    }
}