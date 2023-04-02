import { Component } from '@angular/core';

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

  showSidebar() {
    this.sidebarIsOpen = true;
  }

  parentEventHandler(value: boolean) {
    this.sidebarIsOpen = value;
  }
}
