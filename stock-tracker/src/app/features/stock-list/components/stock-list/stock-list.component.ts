import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { QuoteView } from 'src/app/model';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockListComponent {
  @Input() stocks: readonly QuoteView[] = [];

  @Output() remove = new EventEmitter<string>();
}
