import { Pipe, PipeTransform } from '@angular/core';
import { ToDo } from '../models/toDo';

@Pipe({
  name: 'filterTodolist',
  standalone: true,
})
export class FilterTodolistPipe implements PipeTransform {
  transform(value: ToDo[], searchKey: string): ToDo[] {
    if (searchKey.length < 3) return value;
    return value.filter((v) => v.title.includes(searchKey));
  }
}
