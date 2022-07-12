import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-add-stock-form',
  templateUrl: './add-stock-form.component.html',
  styleUrls: ['./add-stock-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddStockFormComponent {
  @Output() add = new EventEmitter<string>();
}
