import { Injectable } from '@angular/core';
import { Calendar } from '../models/calendar.model';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { of } from 'rxjs';

import * as usersData from '../../../data.json';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  // private calendar: Calendar[] = [];
  data = usersData;

  constructor() {}

  read() {
    return of(this.data.calendar);
  }
}
