import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToDo } from '../../models/toDo';
import { FilterTodolistPipe } from '../../pipes/filter-todolist.pipe';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../services/todo.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  standalone: true,
  imports: [CommonModule, FilterTodolistPipe, FormsModule, TranslateModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent implements OnInit {
  todoList: ToDo[] = [];
  today: Date = new Date();
  searchKey: string = '';
  selectedLng!: string;
  constructor(
    private todoService: TodoService,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.selectedLng = this.translateService.defaultLang;
    this.getTodos();
  }

  changeLanguage() {
    this.translateService.use(this.selectedLng);
  }

  getTodos() {
    this.translateService
      .get('hello')
      .subscribe((response) => console.log(response));
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
