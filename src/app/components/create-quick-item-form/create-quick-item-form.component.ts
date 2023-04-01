import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { QuickItemsService } from '../../services/quick-items.service';

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
  heroes = [];
  constructor(
    private fb: FormBuilder,
    private quickItemsService: QuickItemsService
  ) {}

  onSubmit() {
    if (!this.registerForm.invalid) {
      {
        console.log(this.registerForm.value);
        this.quickItemsService
          .addQuickitem(this.registerForm.value)
          .subscribe((item) => console.log(item));
      }
    } else {
      console.log('forma nije validna');
    }

    this.isSubmitted = true;
  }
}
