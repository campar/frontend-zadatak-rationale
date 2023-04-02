import { Component, ContentChild, Input, ViewChild } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { CreateQuickItemFormComponent } from '../create-quick-item-form/create-quick-item-form.component';
import { QuickItemsService } from '../../services/quick-items.service';
import { QuickItem } from '../../models/quick-item';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  constructor(
    public modalService: ModalService,
    private quickItemService: QuickItemsService
  ) {}
  closeCallback() {
    this.modalService.showLoremModal = false;
    this.modalService.showModal = false;
  }

  @ContentChild(CreateQuickItemFormComponent)
  quickForm: any;

  test() {
    console.log(this.quickForm.onSubmit());
    // console.log('test');
    // this.quickItemService.addQuickitem(this.items);
  }
}
