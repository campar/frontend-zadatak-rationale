import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rationale-focus-miniapp';

  sidebarIsOpen = false;

  showSidebar() {
    this.sidebarIsOpen = true;
  }

  parentEventHandler(value: boolean) {
    this.sidebarIsOpen = value;
  }
}
