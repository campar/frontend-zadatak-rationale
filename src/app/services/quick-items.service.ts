import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { QuickItem } from '../models/quick-item';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class QuickItemsService {
  constructor(private http: HttpClient) {}

  private API_URL = environment.baseURL;

  addQuickitem(item: any) {
    return this.http
      .post(this.API_URL, item)
      .pipe(map((data: any) => data.quickItems));
  }
}
