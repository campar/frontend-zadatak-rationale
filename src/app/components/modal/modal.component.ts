import { Component, Input } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  @Input() show = false;
  @Input() customClass = '';

  constructor(public modalService: ModalService) {}
  closeCallback() {
    this.modalService.showModal = false;
  }
}
