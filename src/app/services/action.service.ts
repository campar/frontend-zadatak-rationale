import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Action } from '../models/action.model';

@Injectable({
  providedIn: 'root',
})
export class ActionService {
  constructor(private http: HttpClient) {}

  private API_URL = environment.baseURL;

  getActions() {
    return this.http
      .get<Action[]>(this.API_URL)
      .pipe(map((value: any) => value.actions));
  }
}
