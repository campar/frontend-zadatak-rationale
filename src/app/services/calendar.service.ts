import { Injectable } from '@angular/core';
import { Calendar } from '../models/calendar.model';
import { HttpClient } from '@angular/common/http';

import { map, of } from 'rxjs';

import { environment } from 'src/environments/environment.development';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  constructor(private http: HttpClient) {}

  private API_URL = environment.baseURL;

  getMeetings() {
    return this.http
      .get<Task[]>(this.API_URL + '/calendar')
      .pipe(map((data: any) => data));
  }
}
