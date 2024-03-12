import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToDo } from '../../models/toDo';
import { FilterTodolistPipe } from '../../pipes/filter-todolist.pipe';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../services/todo.service';

@Component({
  standalone: true,
  imports: [CommonModule, FilterTodolistPipe, FormsModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent implements OnInit {
  todoList: ToDo[] = [];
  today: Date = new Date();
  searchKey: string = '';

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    // backend'e istek atıp verileri çek
    this.todoService.getAll().subscribe({
      next: (response: ToDo[]) => {
        console.log('Backendden cevap geldi:', response);
        this.todoList = response;
      },
      error: (error) => {
        console.log('Backendden hatalı cevap geldi:', error);
      },
      complete: () => {
        console.log('Backend isteği sonlandı.');
      },
    });
  }

  postToDo() {
    let obj = {};
    //this.httpClient.post('link', obj).subscribe();
  }

  formatDate(date: Date) {
    // formatlama işlemi
    return date.toISOString();
  }
}
