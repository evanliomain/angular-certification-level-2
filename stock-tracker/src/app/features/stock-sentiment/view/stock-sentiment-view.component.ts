import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Profile, Sentiment } from 'src/app/model';

@Component({
  selector: 'app-stock-sentiment-view',
  templateUrl: './stock-sentiment-view.component.html',
  styleUrls: ['./stock-sentiment-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockSentimentViewComponent {
  @Input() profile!: Profile | null;
  @Input() sentiments: readonly Sentiment[] = [];
}
