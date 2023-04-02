import { Component } from '@angular/core';
import { Action } from 'src/app/models/action.model';
import { Task } from 'src/app/models/task.model';
import { ActionService } from 'src/app/services/action.service';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-pulse',
  templateUrl: 'pulse.component.html',
  host: { class: 'pulse' },
})
export class PulseComponent {
  tasks: Task[] = [];
  actions: Action[] = [];

  dashboardInfos = [
    {
      title: 'Meetings',
      iconPath: 'assets/svg/Group-6.svg',
      count: 23,
    },
    {
      title: 'Items',
      iconPath: 'assets/svg/Group-5.svg',
      count: 11,
    },
    {
      title: 'Action',
      iconPath: 'assets/svg/Group-4.svg',
      count: 15,
    },
    {
      title: 'Reminders',
      iconPath: 'assets/svg/Group-3.svg',
      count: 9,
    },
    {
      title: 'Notes',
      iconPath: 'assets/svg/Group-2.svg',
      count: 18,
    },
  ];

  constructor(
    private taskService: TaskService,
    private actionService: ActionService
  ) {}

  ngOnInit() {
    this.taskService
      .getTasks()
      .subscribe((data: Task[]) => (this.tasks = data));

    this.actionService
      .getActions()
      .subscribe((data: Action[]) => (this.actions = data));
  }
}
