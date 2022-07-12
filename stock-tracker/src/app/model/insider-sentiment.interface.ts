import { Sentiment } from './sentiment.interface';

export interface InsiderSentiment {
  data: readonly Sentiment[];
  symbol: string;
}
