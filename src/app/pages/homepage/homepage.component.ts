import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToDo } from '../../models/toDo';

@Component({
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent implements OnInit {
  todoList: ToDo[] = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    // backend'e istek atıp verileri çek
    this.httpClient
      .get<ToDo[]>('https://jsonplaceholder.typicode.com/todos')
      .subscribe({
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
    this.httpClient.post('link', obj).subscribe();
  }
}
