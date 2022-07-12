import { parseISO, toDate } from 'date-fns';

export function parse(value: string | Date | number): Date {
  return 'string' === typeof value ? parseISO(value) : toDate(value);
}
