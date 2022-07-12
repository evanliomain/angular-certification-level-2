import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FinnhubInterceptor } from './finnhub.interceptor';
import { FinnhubService } from './finnhub.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    FinnhubService,
    { provide: HTTP_INTERCEPTORS, useClass: FinnhubInterceptor, multi: true },
  ],
})
export class ApiModule {}
