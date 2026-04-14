import type { Locale } from './config';

/** Path under the site root (with Astro `base` applied). */
export function sitePath(pathFromRoot: string): string {
	const base = import.meta.env.BASE_URL;
	const p = pathFromRoot.startsWith('/') ? pathFromRoot.slice(1) : pathFromRoot;
	return `${base}${p}`;
}

/** Base path like `/pt/` or `/en/` (includes `base` from config). */
export function localePrefix(locale: Locale): string {
	return sitePath(`${locale}/`);
}

export function homePath(locale: Locale): string {
	return sitePath(`${locale}/`);
}

export function workIndexPath(locale: Locale): string {
	return sitePath(`${locale}/work/`);
}

export function workDetailPath(locale: Locale, slug: string): string {
	return sitePath(`${locale}/work/${slug}/`);
}

export function aboutPath(locale: Locale): string {
	return sitePath(`${locale}/about/`);
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
		const full = target === 'pt' ? p : '/en' + p.slice(3);
		return sitePath(full.slice(1));
	}
	if (p === '/pt') {
		const full = target === 'pt' ? '/pt/' : '/en/';
		return sitePath(full.slice(1));
	}
	if (p.startsWith('/en/')) {
		const full = target === 'en' ? p : '/pt' + p.slice(3);
		return sitePath(full.slice(1));
	}
	if (p === '/en') {
		const full = target === 'en' ? '/en/' : '/pt/';
		return sitePath(full.slice(1));
	}

	return sitePath(target === 'pt' ? 'pt/' : 'en/');
}
