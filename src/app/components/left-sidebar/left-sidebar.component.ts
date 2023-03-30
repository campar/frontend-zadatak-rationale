import { Component } from '@angular/core';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  // styleUrls: ['./app.component.scss'],
  host: { class: 'left-sidebar' },
})
export class LeftSidebarComponent {
  title = 'rationale-focus-miniapp';
}
