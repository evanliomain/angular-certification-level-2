import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addSymbol, SymbolState } from 'src/app/business/symbol';

@Component({
  selector: 'app-stock-list-container',
  template: `<app-stock-list-view (add)="onAdd($event)"></app-stock-list-view>`,
})
export class StockListContainerComponent {
  constructor(private store: Store<SymbolState>) {}

  protected onAdd(symbol: string): void {
    this.store.dispatch(addSymbol({ symbol }));
  }
}
