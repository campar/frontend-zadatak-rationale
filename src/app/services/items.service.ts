import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, of } from 'rxjs';
import { environment } from 'src/environments/environment.development';

import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  constructor(private http: HttpClient) {}

  private API_URL = environment.baseURL;

  getItemsList() {
    return this.http
      .get<Task[]>(this.API_URL + '/itemsList')
      .pipe(map((data: any) => data));
  }
}
