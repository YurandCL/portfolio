import type { FormatDateProps } from '@types/formatDate';

export function useFormatDate({ date, options }: FormatDateProps) {
  if (!date || date === '--') return '--';

  const { year = 'numeric', month = 'long' } = options ?? {};
  const locale = 'es-PE';

  return new Date(date).toLocaleDateString(locale, {
    year,
    month,
    ...options,
  });
}