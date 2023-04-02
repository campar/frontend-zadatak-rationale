import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { map } from 'rxjs';
import { QuickItem } from 'src/app/models/quick-item';
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
    jobTitle: ['', Validators.required],
    languages: ['', Validators.required],
  });

  isSubmitted = false;
  heroes = [];
  constructor(
    private fb: FormBuilder,
    private quickItemsService: QuickItemsService
  ) {}
  // items: QuickItem = {};

  onSubmit() {
    if (!this.registerForm.invalid) {
      {
        this.quickItemsService
          .addQuickitem(this.registerForm.value)
          .subscribe((data) => {
            console.log('POST Request is successful ', data);
          });

        this.registerForm.reset();
        this.isSubmitted = false;
      }
    } else {
      this.isSubmitted = true;
    }
  }
}
