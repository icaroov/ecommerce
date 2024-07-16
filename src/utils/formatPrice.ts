type Locale = 'pt-BR' | 'en-US'

export const formatPrice = (price: number, locale: Locale = 'en-US') => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: locale === 'pt-BR' ? 'BRL' : 'USD',
    minimumSignificantDigits: 1,
  }).format(price)
}
