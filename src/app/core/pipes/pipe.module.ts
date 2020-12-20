import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateFormaterPipe } from './date-formatter.pipe';
import { FindByPipe } from './find-by.pipe';
import { GroupByPipe } from './group-by.pipe';
import { OrderByPipe } from './order-by.pipe';

@NgModule({
    declarations: [
        DateFormaterPipe,
        FindByPipe,
        GroupByPipe,
        OrderByPipe
    ],
    imports: [CommonModule],
    exports: [
        DateFormaterPipe,
        FindByPipe,
        GroupByPipe,
        OrderByPipe
    ],
    providers: [],
})
export class PipesModule { }