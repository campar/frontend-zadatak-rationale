import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-quick-item-form',
  templateUrl: './create-quick-item-form.component.html',
  host: { class: 'create-item-form__body' },
})
export class CreateQuickItemFormComponent {
  registerForm = this.fb.group({
    itemTitle: ['', Validators.required],
    type: ['', Validators.required],
    businessUnit: ['', Validators.required],
    dueDate: ['', Validators.required],
    priority: ['', Validators.required],
    objective: ['', Validators.required],
  });

  isSubmitted = false;

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    if (!this.registerForm.invalid) {
      {
        console.log('forma je vecna');
      }
    } else {
      console.log('forma nije validna');
    }

    this.isSubmitted = true;
  }
}
