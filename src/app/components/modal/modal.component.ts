import { Component, ContentChild, Input, ViewChild } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { CreateQuickItemFormComponent } from '../create-quick-item-form/create-quick-item-form.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  constructor(public modalService: ModalService) {}
  closeCallback() {
    this.modalService.showLoremModal = false;
    this.modalService.showModal = false;
  }

  @ContentChild(CreateQuickItemFormComponent)
  quickForm: any;

  test() {
    console.log(this.quickForm.onSubmit());
  }
}
