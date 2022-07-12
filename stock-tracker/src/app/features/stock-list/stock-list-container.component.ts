import { Component } from '@angular/core';

@Component({
  selector: 'app-stock-list-container',
  template: `<app-stock-list-view (add)="onAdd($event)"></app-stock-list-view>`,
})
export class StockListContainerComponent {
  protected onAdd(symbol: string): void {
    console.log('add', symbol);
  }
}
