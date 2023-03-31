import { Injectable } from '@angular/core';

import { HttpClient, HttpResponse } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { Task } from '../models/task.model';

const localUrl = 'assets/data.json';

@Injectable({
  providedIn: 'root',
})
export class CardItemsService {
  constructor(private http: HttpClient) {}

  getTasks(): Observable<any> {
    return this.http
      .get<Task[]>(localUrl)
      .pipe(map((value: any) => value.tasks));
  }
}
