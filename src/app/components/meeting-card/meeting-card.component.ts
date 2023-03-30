import { Component, Input } from '@angular/core';
import { Calendar } from '../../models/calendar.model';

@Component({
  selector: 'meeting-card',
  templateUrl: './meeting-card.component.html',
})
export class MeetingCardComponent {
  @Input() meeting!: Calendar;
}
