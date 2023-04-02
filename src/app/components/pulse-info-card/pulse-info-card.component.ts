import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-pulse-info-card',
  template: ` <div>
      <div class="card__icon">
        <img [src]="info.iconPath" />
      </div>
      <div class="card__name">{{ info.title }}</div>
    </div>

    <div class="card__number">{{ info.count }}</div>`,
})
export class PulseInfoCardComponent {
  @Input() info!: any;

  @HostBinding('class') class = 'card';
}
