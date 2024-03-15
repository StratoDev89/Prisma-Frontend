import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtomComponent } from '../buttom/buttom.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, ButtomComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    specialty: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    if (this.form.invalid) {
      console.log('invalid');
      this.form.markAllAsTouched();
      return;
    }
    console.log(this.form.value);
  }

  get name() {
    return this.form.get('name');
  }
  get specialty() {
    return this.form.get('specialty');
  }

  get email() {
    return this.form.get('email');
  }

  get phone() {
    return this.form.get('phone');
  }
}
