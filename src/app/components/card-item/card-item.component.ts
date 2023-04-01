import { Component, Input } from '@angular/core';
import { Task } from '../../models/task.model';
import { Calendar } from '../../models/calendar.model';
import { Action } from 'src/app/models/action.model';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
})
export class CardItemComponent {
  @Input() cards!: Task[] | Action[];

  @Input() title!: string;
  @Input() subtitle!: string;
}
