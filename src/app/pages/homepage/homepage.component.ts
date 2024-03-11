import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent implements OnInit {
  todoList: string[] = ['Eleman 1'];

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    //this.getTodos();
    this.getTodos2();
  }

  getTodos() {
    // backend'e istek atıp verileri çek
    //this.httpClient.get('https://jsonplaceholder.typicode.com/todos');
    console.log('Fonksiyon öncesi');
    this.someAsyncOperation()
      .then((response: string) => {
        console.log('Cevap başarılı promiseden şu değer geldi:', response);
      }) // işlem başarılı
      .catch((error) => {
        console.log('Cevap başarısız promiseden şu değer geldi:', error);
      }) // işlem başarısız
      .finally(() => {
        console.log('Promise işlemi başarılı ya da başarısız sonlandı.');
      }); // işlem bitti (başarılı-başarısız)
    // then-catch-finally
    setTimeout(() => {
      console.log('Fonksiyon sonrası');
    }, 3001);
    console.log('Sync');
  }

  async getTodos2() {
    try {
      let value: string = await this.someAsyncOperation();
      console.log(value);
    } catch (error) {
      console.log('Hata:', error);
    }
  }

  someAsyncOperation(): Promise<string> {
    // CB, Callback function
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('123456');
      }, 3000);
    });
  }
}
