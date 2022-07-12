import { Quote } from './quote.interface';

export interface QuoteView extends Quote {
  /**
   * Symbol description
   */
  description: string;
}
