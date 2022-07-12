import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { QuoteView } from 'src/app/model';

@Component({
  selector: 'app-stock-list-view',
  templateUrl: './stock-list-view.component.html',
  styleUrls: ['./stock-list-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockListViewComponent {
  @Input() stocks: readonly QuoteView[] = [];

  @Output() add = new EventEmitter<string>();
}
