import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Sentiment } from 'src/app/model';

@Component({
  selector: 'app-sentiment',
  templateUrl: './sentiment.component.html',
  styleUrls: ['./sentiment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SentimentComponent {
  @Input() sentiment!: Sentiment;
}
