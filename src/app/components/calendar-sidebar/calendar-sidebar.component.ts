import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calendar-sidebar',
  templateUrl: './calendar-sidebar.component.html',
})
export class CalendarSidebarComponent {
  @Input()
  sidebarIsOpen!: boolean;

  @Output()
  closeSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();

  clickClose() {
    this.closeSidebar.emit(false);
  }
}
