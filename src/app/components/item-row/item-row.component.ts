import { Component, Input } from '@angular/core';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: '[app-item-row]',
  templateUrl: './item-row.component.html',
})
export class ItemRowComponent {
  @Input() item!: Item;
}
