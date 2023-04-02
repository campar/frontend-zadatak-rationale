import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { QuickItem } from '../models/quick-item';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class QuickItemsService {
  constructor(private http: HttpClient) {}

  private quickItems: QuickItem[] = [];

  private API_URL = environment.baseURL;

  addQuickitem(quickItem: any) {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(quickItem);
    return this.http.post(this.API_URL + '/quicks', body, {
      headers: headers,
    });
  }
}
