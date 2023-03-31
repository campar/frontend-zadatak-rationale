import { Component } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { ItemsService } from '../../services/items.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pulse-table',
  templateUrl: './pulse-table.component.html',
})
export class PulseTableComponent {
  constructor(private itemsService: ItemsService) {}
  items: Item[] = [];

  ngOnInit(): void {
    this.itemsService
      .getItemsList()
      .pipe(
        map((items) => {
          return items;
        })
      )
      .subscribe((value) => {
        this.items = value;
      });
  }
}
