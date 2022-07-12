import { Quote } from './quote.interface';

export interface QuoteView extends Quote {
  /**
   * Symbol description
   */
  description: string;

  /**
   * true if quote is loaded
   */
  loaded: boolean;
}
