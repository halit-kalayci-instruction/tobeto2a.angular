import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'myform', // html'de çağrılacak isim
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  username: string = '';
  // Reactive Forms

  writeToConsole() {
    console.log(this.username);
  }

  changeFromTs() {
    this.username = 'örnek';
  }
}
// ngModel araştırma
// two way data binding

// typescriptte interfaceler / modeller

// CLI => Command Line Interface
