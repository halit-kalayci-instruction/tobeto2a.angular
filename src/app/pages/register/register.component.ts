import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BaseInputComponent } from '../../components/base-input/base-input.component';

@Component({
  standalone: true,
  imports: [CommonModule, BaseInputComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {}
