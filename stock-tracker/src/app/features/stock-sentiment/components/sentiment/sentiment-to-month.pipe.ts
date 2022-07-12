import { Pipe, PipeTransform } from '@angular/core';
import { format } from 'date-fns';
import { Sentiment } from 'src/app/model';
import { parse } from 'src/app/utils/date';

@Pipe({
  name: 'sentimentToMonth',
})
export class SentimentToMonthPipe implements PipeTransform {
  transform({ year, month }: Sentiment): string {
    return format(
      parse(`${year}-${String(month).padStart(2, '0')}-01`),
      'MMMM'
    );
  }
}
