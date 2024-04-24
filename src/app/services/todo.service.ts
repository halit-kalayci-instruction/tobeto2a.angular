import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDo } from '../models/toDo';
import { BASE_API_URL } from '../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<ToDo[]> {
    return this.httpClient.get<ToDo[]>(BASE_API_URL + 'todos');
  }
}
// interceptor, guard
