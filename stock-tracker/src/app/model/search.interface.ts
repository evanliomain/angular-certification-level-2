import { SearchResult } from './search-result.interface';

export interface Search {
  count: number;
  result: readonly SearchResult[];
}
