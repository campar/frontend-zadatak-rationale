import { Injectable } from '@angular/core';
import { Calendar } from '../models/calendar.model';
import { HttpClient } from '@angular/common/http';

import { of } from 'rxjs';

import * as mockData from '../../../data.json';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  // private calendar: Calendar[] = [];
  data = mockData;

  constructor() {}

  read() {
    return of(this.data.calendar);
  }
}
