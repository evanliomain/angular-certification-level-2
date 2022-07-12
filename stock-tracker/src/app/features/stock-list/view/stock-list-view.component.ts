import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Quote } from 'src/app/model';

@Component({
  selector: 'app-stock-list-view',
  templateUrl: './stock-list-view.component.html',
  styleUrls: ['./stock-list-view.component.scss'],
})
export class StockListViewComponent {
  @Input() stocks: readonly Quote[] = [];

  @Output() add = new EventEmitter<string>();
}
