import { Component } from '@angular/core';
import { Calendar } from '../models/calendar.model';
import { CalendarService } from '../services/calendar.service';
@Component({
  selector: 'app-calendar-list',
  template: `
    <meeting-card
      *ngFor="let calendar of calendars"
      [meeting]="calendar"
    ></meeting-card>
  `,
})
export class CalendarListComponent {
  constructor(private calendarService: CalendarService) {}

  calendars!: Calendar[];

  ngOnInit(): void {
    this.calendarService.read().subscribe((value) => {
      this.calendars = value;
      console.log(value);
    });
  }
}
