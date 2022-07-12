import { lightFormat } from 'date-fns';
import { parse } from './parse';

export function format(
  date: Date | number | string | undefined | null
): string {
  if (undefined === date || null === date) {
    return '';
  }
  return lightFormat(parse(date), 'yyyy-MM-dd');
}
