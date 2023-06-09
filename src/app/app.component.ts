import { Component, ViewChild } from '@angular/core';
import { ModalService } from './services/modal.service';
import { ModalComponent } from './components/modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rationale-focus-miniapp';

  sidebarIsOpen = true;

  showModal = false;

  showQuickFormModal = false;

  showLoremModal = false;

  constructor(public modalService: ModalService) {}
  showSidebar() {
    this.sidebarIsOpen = true;
  }

  parentEventHandler(value: boolean) {
    this.sidebarIsOpen = value;
  }

  @ViewChild(ModalComponent) grandchild!: ModalComponent;

  callChild() {
    this.grandchild.submitForm();
  }
}
