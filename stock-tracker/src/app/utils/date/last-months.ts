import { subMonths } from 'date-fns';
import { format } from './format';

export function lastMonths(nbMonths: number): { from: string; to: string } {
  const now = Date.now();
  return {
    from: format(subMonths(now, nbMonths)),
    to: format(now),
  };
}
