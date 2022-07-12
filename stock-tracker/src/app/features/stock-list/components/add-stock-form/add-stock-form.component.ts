import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-stock-form',
  templateUrl: './add-stock-form.component.html',
  styleUrls: ['./add-stock-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddStockFormComponent {
  protected formGroup = this.fb.group({ symbol: [''] });

  @Output() add = new EventEmitter<string>();

  constructor(private fb: FormBuilder) {}

  protected get symbolControl(): FormControl {
    return this.formGroup.get('symbol') as FormControl;
  }

  protected submit(): void {
    this.add.emit(this.symbolControl.value);
    this.symbolControl.setValue('');
  }
}
