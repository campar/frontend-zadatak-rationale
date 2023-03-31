import { Component } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { CardItemsService } from '../../services/card-items.service';

@Component({
  selector: 'app-pulse',
  templateUrl: 'pulse.component.html',
  host: { class: 'pulse' },
})
export class PulseComponent {
  tasks: Task[] = [];
  constructor(private cardItemsService: CardItemsService) {}

  ngOnInit() {
    this.cardItemsService
      .getTasks()
      .subscribe((data: Task[]) => (this.tasks = data));
  }
}
