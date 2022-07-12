import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-tendancy',
  templateUrl: './tendancy.component.html',
  styleUrls: ['./tendancy.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TendancyComponent {
  @Input() value!: number | undefined;

  @HostBinding('class.down')
  get isDown(): boolean {
    if (undefined === this.value) {
      return false;
    }
    return this.value < 0;
  }
  @HostBinding('class.up')
  get isUp(): boolean {
    if (undefined === this.value) {
      return false;
    }
    return 0 < this.value;
  }
}
