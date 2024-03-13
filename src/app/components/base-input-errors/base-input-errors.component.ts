import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  ControlContainer,
  FormGroupDirective,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'myinput-errors',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './base-input-errors.component.html',
  styleUrl: './base-input-errors.component.scss',
})
export class BaseInputErrorsComponent {
  @Input() fieldName!: string;
  constructor(private controlContainer: ControlContainer) {}

  get form() {
    if (this.controlContainer?.formDirective) {
      return (this.controlContainer.formDirective as FormGroupDirective).form;
    }
    throw new Error(
      'This component should be used inside a reactive form group.'
    );
  }
  hasError(errorCode: string) {
    return (
      (this.form.dirty || this.form.get(this.fieldName)?.touched) &&
      this.form.get(this.fieldName)?.hasError(errorCode)
    );
  }
  getError(errorCode: string) {
    return this.form.get(this.fieldName)?.getError(errorCode);
  }
}
