import { Injectable } from '@angular/core';
import { of } from 'rxjs';

// import * as mockData from '../../../data.json';

import * as mockData from '../../../data.json';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  data = mockData;

  constructor() {}

  read() {
    return of(this.data.itemsList);
  }
}
