import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'formatDate' })
export class DateFormaterPipe implements PipeTransform {
    transform(dateTime: any): any {

    }
}