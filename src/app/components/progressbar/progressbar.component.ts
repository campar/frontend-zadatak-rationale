import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss'],
})
export class ProgressbarComponent {
  @Input() currentProgress!: number;

  setColor() {
    let classes = {
      constantClass: true,
      'progressbar__current--red': this.currentProgress <= 40,
      'progressbar__current--orange':
        this.currentProgress >= 41 && this.currentProgress <= 60,
      'progressbar__current--blue':
        this.currentProgress >= 61 && this.currentProgress <= 90,
      'progressbar__current--green': this.currentProgress >= 91,
    };

    return classes;
  }
}
