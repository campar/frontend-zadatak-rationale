import { Component, Input } from '@angular/core';
import { Calendar } from '../../models/calendar.model';

@Component({
  selector: 'meeting-card',
  template: `
    <div class="meeting">
      <div class="meeting__wrapper">
        <div class="meeting__name">{{ meeting.name }}</div>
        <div class="meeting__date">{{ meeting.date | date : 'M.dd.y' }}</div>
      </div>

      <div *ngIf="meeting.status" class="meeting__status">
        {{ meeting.status }}
      </div>
    </div>
  `,
})
export class MeetingCardComponent {
  @Input() meeting!: Calendar;
}
