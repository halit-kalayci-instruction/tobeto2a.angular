import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BaseInputComponent } from '../../components/base-input/base-input.component';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, BaseInputComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createFormGroup();
  }

  createFormGroup() {
    this.registerForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(7),
      ]),
      passwordConfirm: new FormControl('', [
        Validators.required,
        Validators.minLength(7),
      ]),
    });
  }
  submit() {
    this.registerForm.markAsDirty();
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    }
  }

  hasError(errorCode: string, field: string) {
    return (
      (this.registerForm.dirty || this.registerForm.get(field)?.touched) &&
      this.registerForm.get(field)?.hasError(errorCode)
    );
  }
}
