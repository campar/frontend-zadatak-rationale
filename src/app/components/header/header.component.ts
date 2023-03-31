import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  // styleUrls: ['./header.component.scss']
  host: { class: 'header' },
})
export class HeaderComponent {
  isActivePopover: boolean = false;

  togglePopover() {
    this.isActivePopover = !this.isActivePopover;
  }
}
