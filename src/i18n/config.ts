export const locales = ['pt', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export function isLocale(value: string | undefined): value is Locale {
	return value === 'pt' || value === 'en';
}

export function htmlLang(locale: Locale): string {
	return locale === 'pt' ? 'pt-BR' : 'en';
}
