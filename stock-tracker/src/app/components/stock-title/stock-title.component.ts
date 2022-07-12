import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Profile } from 'src/app/model';

@Component({
  selector: 'app-stock-title',
  templateUrl: './stock-title.component.html',
  styleUrls: ['./stock-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockTitleComponent {
  @Input() profile!: Profile | null;
}
