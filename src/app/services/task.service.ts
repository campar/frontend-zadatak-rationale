import { Injectable } from '@angular/core';

import { HttpClient, HttpResponse } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { Task } from '../models/task.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}

  private API_URL = environment.baseURL;

  getTasks() {
    return this.http
      .get<Task[]>(this.API_URL)
      .pipe(map((value: any) => value.tasks));
  }
}
