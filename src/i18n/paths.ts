import type { Locale } from './config';

/** Base path like `/pt/` or `/en/`. */
export function localePrefix(locale: Locale): string {
	return `/${locale}/`;
}

export function homePath(locale: Locale): string {
	return `/${locale}/`;
}

export function workIndexPath(locale: Locale): string {
	return `/${locale}/work/`;
}

export function workDetailPath(locale: Locale, slug: string): string {
	return `/${locale}/work/${slug}/`;
}

export function aboutPath(locale: Locale): string {
	return `/${locale}/about/`;
}

/**
 * Swap `/pt/...` ↔ `/en/...` for the locale switcher.
 * Falls back to the target locale home when the path is unexpected.
 */
export function pathWithLocale(pathname: string, target: Locale): string {
	let p = pathname;
	const base = import.meta.env.BASE_URL;
	if (base && base !== '/') {
		p = p.replace(base, '');
	}
	if (!p.startsWith('/')) p = '/' + p;

	if (p.startsWith('/pt/')) {
		return target === 'pt' ? p : '/en' + p.slice(3);
	}
	if (p === '/pt') {
		return target === 'pt' ? '/pt/' : '/en/';
	}
	if (p.startsWith('/en/')) {
		return target === 'en' ? p : '/pt' + p.slice(3);
	}
	if (p === '/en') {
		return target === 'en' ? '/en/' : '/pt/';
	}

	return target === 'pt' ? '/pt/' : '/en/';
}
