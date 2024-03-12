import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  today: Date = new Date();
  constructor(private todoService: TodoService) {}
  ngOnInit(): void {
    this.todoService
      .getAll()
      .subscribe({ next: (value) => console.log(value) });

    this.todoService
      .getAll()
      .subscribe({ next: (value) => console.log(value) });
    this.todoService
      .getAll()
      .subscribe({ next: (value) => console.log(value) });
    this.todoService
      .getAll()
      .subscribe({ next: (value) => console.log(value) });
  }
}
