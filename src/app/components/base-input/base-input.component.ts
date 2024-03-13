import { Component, Input } from '@angular/core';

@Component({
  selector: 'myinput',
  standalone: true,
  imports: [],
  templateUrl: './base-input.component.html',
  styleUrl: './base-input.component.scss',
})
export class BaseInputComponent {
  @Input() label!: string;
  @Input() labelId!: string;
  @Input() inputType: string = 'text';
}
