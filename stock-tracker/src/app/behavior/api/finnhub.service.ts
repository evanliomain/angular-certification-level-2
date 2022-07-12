import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { InsiderSentiment, Quote, Search } from 'src/app/model';

@Injectable({
  providedIn: 'root',
})
export class FinnhubService {
  constructor(private http: HttpClient) {}

  public quote(symbol: string): Observable<Quote> {
    return this.http
      .get<Quote>(`quote?symbol=${symbol}`)
      .pipe(map(quote => ({ ...quote, symbol })));
  }

  public description(
    symbol: string
  ): Observable<{ symbol: string; description: string }> {
    return this.search(symbol)
      .pipe(
        map(({ result }) => result.find(element => element.symbol === symbol))
      )
      .pipe(
        map(element => ({
          symbol,
          description: element?.description ?? '',
        }))
      );
  }

  public search(symbol: string): Observable<Search> {
    return this.http.get<Search>(`search?q=${symbol}`);
  }

  public sentiments(
    symbol: string,
    from: string,
    to: string
  ): Observable<InsiderSentiment> {
    return this.http.get<InsiderSentiment>(
      `stock/insider-sentiment?symbol=${symbol}&from=${from}&to=${to}`
    );
  }
}
