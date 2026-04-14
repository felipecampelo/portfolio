import type { CollectionEntry } from 'astro:content';
import type { Locale } from './config';

export function workSlugFromId(id: string): string {
	const i = id.indexOf('/');
	if (i === -1) return id;
	return id.slice(i + 1);
}

export function workLocaleFromId(id: string): Locale | undefined {
	const i = id.indexOf('/');
	if (i === -1) return undefined;
	const prefix = id.slice(0, i);
	return prefix === 'pt' || prefix === 'en' ? prefix : undefined;
}

export function workForLocale(entries: CollectionEntry<'work'>[], locale: Locale) {
	return entries.filter((e) => workLocaleFromId(e.id) === locale);
}

export function findLocalizedEntry(
	entries: CollectionEntry<'work'>[],
	slug: string,
	locale: Locale,
): CollectionEntry<'work'> | undefined {
	return entries.find((e) => e.id === `${locale}/${slug}`);
}
